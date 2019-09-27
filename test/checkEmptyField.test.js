import { checkEmptyField } from '../src/modules/checkEmptyField';
import { type } from 'os';

// Define the DOM
document.body.innerHTML = `
    <form id='formID'>
        <input type='text' id='inputField-1' value='some value'/>
        <input type='text' id='inputField-2' value/>
        <input type='textarea' id='inputField-3' value='Value for textarea'/>
    </form>
`;

describe('Check for empty fields', () => {
	const field1 = document.getElementById('inputField-1');
	const field2 = document.getElementById('inputField-2');
	const field3 = document.getElementById('inputField-3');
	it('Should check for empty fields', () => {
		expect(checkEmptyField(field2)).toBe('No');
		expect(checkEmptyField(field1)).toBe('Yes');
	});
	it('Should check the type passed as parameter', () => {
		expect(checkEmptyField('hello')).toBeNull();
		expect(checkEmptyField(1)).toBeNull();
		expect(checkEmptyField({})).toBeNull();
	});
	it('Should check the input type', () => {
		expect(checkEmptyField(field3)).toBeNull();
	});
});
