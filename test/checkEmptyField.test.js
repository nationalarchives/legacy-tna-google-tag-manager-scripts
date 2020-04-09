import { checkEmptyField } from '../src/modules/checkEmptyField';

// Define the DOM
document.body.innerHTML = `
    <form id='formID'>
        <input type='text' id='inputField-1' value='some value'/>
        <input type='text' id='inputField-2' value/>
        <input type='textarea' id='inputField-3' value='Value for textarea'/>
        <input type='password' id='inputField-4' value/>
        <input type='checkbox' id='inputField-5' checked/>
        <input type='checkbox' id='inputField-6'/>
        <input type='select-one' id='inputField-7' value="United Kingdom"/>
        <input type='select-one' id='inputField-8' value/>
    </form>
`;

describe('Check for empty fields', () => {
    const field1 = document.getElementById('inputField-1');
    const field2 = document.getElementById('inputField-2');
    const field3 = document.getElementById('inputField-3');
    const field4 = document.getElementById('inputField-4');
    const field5 = document.getElementById('inputField-5');
    const field6 = document.getElementById('inputField-6');
    const field7 = document.getElementById('inputField-7');
    const field8 = document.getElementById('inputField-8');
    it('Should check for empty fields', () => {
        expect(checkEmptyField(field1, 'text')).toBe('Yes');
        expect(checkEmptyField(field2, 'text')).toBe('No');
        expect(checkEmptyField(field4, 'password')).toBe('No');
        expect(checkEmptyField(field5, 'checkbox')).toBe('Yes');
        expect(checkEmptyField(field6, 'checkbox')).toBe('No');
        expect(checkEmptyField(field7, 'select-one')).toBe('Yes');
        expect(checkEmptyField(field8, 'select-one')).toBe('No');
    });
    it('Should check the type passed as parameter', () => {
        expect(checkEmptyField('hello')).toBeNull();
        expect(checkEmptyField(1, 'number')).toBeNull();
        expect(checkEmptyField({}, 'object')).toBeNull();
    });
    it('Should check the input type', () => {
        expect(checkEmptyField(field3, 'text')).toBeNull();
        expect(checkEmptyField(field2, 'text')).toBe('No');
        expect(checkEmptyField(field1, 'text')).toBe('Yes');
        expect(checkEmptyField(field3, 'textarea')).toBe('Yes');
        expect(checkEmptyField(field4, 'password')).toBe('No');
        expect(checkEmptyField(field5, 'checkbox')).toBe('Yes');
        expect(checkEmptyField(field8, 'select-one')).toBe('No');
        expect(checkEmptyField(field8, 'checkbox')).toBeNull();
    });
});
