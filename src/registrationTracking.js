import{pushInDataLayer} from './modules/pushInDataLayer';
import{checkEmptyField} from './modules/checkEmptyField';

window.addEventListener('DOMContentLoaded', () => {
    const regForm = document.getElementById('regForm');
    const errorsArray = Array.from(document.querySelectorAll('.field-validation-error'));
    const errorMessages = [];
    let errorString;

    const nameField = document.getElementById('Name'),
        nameLabel = nameField.getAttribute('name');

    const emailField = document.getElementById('Email'),
        emailLabel = emailField.getAttribute('name');

    const confirmEmailField = document.getElementById('ConfirmEmail'),
        confirmEmailLabel = confirmEmailField.getAttribute('name');

    const countryField = document.getElementById('Country'),
        countryLabel = countryField.getAttribute('name');

    const passwordField = document.getElementById('Password'),
        passwordLabel = passwordField.getAttribute('name');

    const confirmPasswordField = document.getElementById('ConfirmPassword'),
        confirmPasswordLabel = confirmPasswordField.getAttribute('name');

    const readerTicketField = document.getElementById('ReaderTicket'),
        readerTicketLabel = readerTicketField.getAttribute('name');

    const TCField = document.getElementById('acceptTCs'),
        TCLabel = TCField.getAttribute('name');

    const mailingConditionField = document.getElementById('MailingCondition'),
        mailingConditionLabel = mailingConditionField.getAttribute('name');

    const contactConditionField = document.getElementById('ContactCondition'),
        contactConditionLabel = contactConditionField.getAttribute('name');

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
            eventCategory: 'Account Registration',
            eventAction: 'Registration errors',
            eventLabel: errorString
        });
    }
});
