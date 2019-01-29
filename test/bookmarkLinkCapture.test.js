import {checkValue} from '../src/bookmarkLinkCapture';

describe('Simulate click event', () => {
	const evt = document.createEvent('MouseEvents');
	evt.initEvent('click', false, true);
	document.body.innerHTML = `<ul><li><a id="result" href="/result">http://localhost:81/results/r?_q=felix</a></li></ul>`;
	it('Test click event', () => {

		const resultButton = document.getElementById('result');
		resultButton.addEventListener('click', e => {
			expect(checkValue(e)).toBe('Search results bookmark');
			expect(checkValue(e)).not.toBe('Search results bookmarkss');
		});
		resultButton.dispatchEvent(evt);
	});
});