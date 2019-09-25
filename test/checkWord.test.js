import { checkWord } from '../src/modules/checkWord';

// Define the DOM
document.body.innerHTML = `
    <div id="version">
        Version 6.0 - August 2019 - Hey
    </div >
`;

describe('Checking the word in string', () => {
	it('Should contain the specific word', () => {
		expect(checkWord('version', 'Hey')).toBe(true);
		expect(checkWord('version', 1)).toBe(false);
		expect(checkWord(1, 1)).toBe(false);
	});
	it('Should check if id exists', () => {
		expect(checkWord('versions', 'Hey')).toBe(false);
		expect(checkWord('version', 'Hey')).toBe(true);
	});
});
