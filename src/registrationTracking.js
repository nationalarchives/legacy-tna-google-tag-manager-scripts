import{pushInDataLayer} from './modules/pushInDataLayer';
import{checkEmptyField} from './modules/checkEmptyField';

window.addEventListener('DOMContentLoaded', () => {
    const regForm = document.getElementById('regForm');
    const errorsArray = Array.from(document.querySelectorAll('.field-validation-error'));
    const errorMessages = [];
    let errorString,
        nameField, nameLabel,
        emailField, emailLabel,
        confirmEmailField, confirmEmailLabel,
        countryField, countryLabel,
        passwordField, passwordLabel,
        confirmPasswordField, confirmPasswordLabel,
        readerTicketField, readerTicketLabel,
        TCField, TCLabel,
        mailingConditionField, mailingConditionLabel,
        contactConditionField, contactConditionLabel;

    try {
        nameField = document.getElementById('Name');
        nameLabel = nameField.getAttribute('name');

        emailField = document.getElementById('Email');
        emailLabel = emailField.getAttribute('name');

        confirmEmailField = document.getElementById('ConfirmEmail');
        confirmEmailLabel = confirmEmailField.getAttribute('name');

        countryField = document.getElementById('Country');
        countryLabel = countryField.getAttribute('name');

        passwordField = document.getElementById('Password');
        passwordLabel = passwordField.getAttribute('name');

        confirmPasswordField = document.getElementById('ConfirmPassword');
        confirmPasswordLabel = confirmPasswordField.getAttribute('name');

        readerTicketField = document.getElementById('ReaderTicket');
        readerTicketLabel = readerTicketField.getAttribute('name');

        TCField = document.getElementById('acceptTCs');
        TCLabel = TCField.getAttribute('name');

        mailingConditionField = document.getElementById('MailingCondition');
        mailingConditionLabel = mailingConditionField.getAttribute('name');

        contactConditionField = document.getElementById('ContactCondition');
        contactConditionLabel = contactConditionField.getAttribute('name');
    }
    catch(e){
        console.error(`Error in registrationTracking.js: ${e}`);
    }

    const eventLabel = () => {
        return `${nameLabel}: ${checkEmptyField(
            nameField,
            'text'
        )} > ${emailLabel}: ${checkEmptyField(
            emailField,
            'text'
        )} > ${confirmEmailLabel}: ${checkEmptyField(
            confirmEmailField,
            'text'
        )} > ${countryLabel}: ${checkEmptyField(
            countryField,
            'select-one'
        )} > ${passwordLabel}: ${checkEmptyField(
            passwordField,
            'password'
        )} > ${confirmPasswordLabel}: ${checkEmptyField(
            confirmPasswordField,
            'password'
        )} > ${readerTicketLabel}: ${checkEmptyField(
            readerTicketField,
            'text'
        )} > ${TCLabel}: ${checkEmptyField(
            TCField,
            'checkbox'
        )} > ${mailingConditionLabel}: ${checkEmptyField(
            mailingConditionField,
            'checkbox'
        )} > ${contactConditionLabel}: ${checkEmptyField(
            contactConditionField,
            'checkbox'
        )}`;
    };

    regForm.addEventListener('submit', () => {
        pushInDataLayer({
            event: 'Discovery',
            eventCategory: 'Account Registration',
            eventAction: 'Registration submits',
            eventLabel: eventLabel()
        });
    });

    if(errorsArray.length > 0){
        errorsArray.forEach(index => {
            errorMessages.push(index.getAttribute('data-valmsg-for') + ': ' + index.innerHTML);
        });
        errorString = errorMessages.join(' > ');

        pushInDataLayer({
            event: 'Discovery',
            eventCategory: 'Account Registration',
            eventAction: 'Registration errors',
            eventLabel: errorString
        });
    }
});
