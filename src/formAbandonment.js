/**
 * ------------  THE NATIONAL ARCHIVES  -----------------
 * JS Form Abandonment for Google Tag Manager
 * Magic stuff
 * */
var tna_gtag_manager = (function (config) {
    /** Declare block scope variables */
    let $inputs = $(config.selector),
        $parentForm = $inputs.parents('form').first(),
        _array = [],
        _arrayError = [],
        _formID = 'ID: ' + $parentForm.attr('id') + ' > ';

    /**
     * Assign event handlers on blur
     * Check if the input is empty and if it is do not add it to the _array
     * If data is entered in the field add the field ID into the _array
     * */
    let assign_handlers_on_blur = function () {
        $inputs.on('blur', function () {
            let $this = $(this);
            if ($this.val() === '') {
                return;
            }
            _array.push($this.attr('id'));
            get_error_name();
        });
    };

    /**
     * If error element is visible check if does exist in the _arrayError
     * If it doesn't, add it's ID to the the array
     * */
    let get_error_name = function () {
        $(config.errorSelector).each(function () {
            /** Declare block scope variables */
            let $this = $(this),
                $getAttrID = $this.attr('id');
            /** Check if value exists in _arrayError and if it does do nothing */
            if ($.inArray($getAttrID, _arrayError) !== -1) {
                return;
            }
            /** Add error ID to the _arrayError */
            _arrayError.push($getAttrID);
        });
    };
    /**
     * Check if contact form was submitted
     * */
    let checkSubmit = function (dataLayer) {
        if (Array.isArray(dataLayer)) {
            let i = dataLayer.length - 1;
            while (i > -1) {
                if (dataLayer[i]['event'] === 'gtm.formSubmit') {
                    return true;
                }
                i--;
            }
        }
    };

    /**
     * Event action output
     * */
    let event_action = function (formID, fieldName, arrayError) {
        let errors = (arrayError && arrayError.length !== 0) ? " > Error: " + arrayError.join(' > ') : "";
        let fields = (fieldName && fieldName.length !== 0) ? "Field: " + fieldName.join(' > ') : "";
        return formID + fields + errors;
    };
    /**
     * Google tag manager dataLayer
     * If the
     * */
    let assign_before_unload_actions = function () {
        $(window).on('beforeunload', function () {
            // Make sure the form was not submited before pushing data into datalyer
            if (!checkSubmit(dataLayer) &&  _formID !== undefined && _array.length !== 0) {
                dataLayer.push({
                    'event': 'formAbandonment',
                    'eventCategory': 'Form Abandonment',
                    'eventAction': event_action(_formID, _array, _arrayError)
                });
            }
        });
    };

    /**
     * Init
     * */
    let init = function () {
        assign_before_unload_actions();
        assign_handlers_on_blur();
    };
    init();
    /**
     * Return the magic stuff (object)
     * */
    return {
        _array: _array,
        _arrayError: _arrayError,
        _formID: _formID,
        config:config,
        init:init,
        event_action:event_action,
        get_error_name:get_error_name
    };
})({selector: '.form-abandonment :input', errorSelector: '.form-error'});