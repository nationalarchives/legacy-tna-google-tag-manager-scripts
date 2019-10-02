import { detectUserType } from '../src/modules/detectUserType';

// Define the DOM
document.body.innerHTML = `
    <div id="someDiv">
        Version 6.0 - August 2019 - Hey
    </div >
    <div id="secondDiv">
        some text - Hello
    </div>
`;

describe('Checks for the word after the 2nd -', () => {
	const str = document.getElementById('someDiv').innerHTML;
	const str2 = document.getElementById('secondDiv').innerHTML;
	it('Should contain the specific word', () => {
		expect(detectUserType(str)).toBe('Hey');
	});
	it('checks for word after the 1st -', () => {
		expect(detectUserType(str2)).not.toBe('Hello');
		expect(detectUserType(str2)).not.toBe('Hello');
	});
});
