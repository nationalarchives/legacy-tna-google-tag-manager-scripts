import { renderObjFunc, checkValue } from '../src/bookmarkLinkCapture';

describe('Checking the object, property and type', () => {
	it('Should have the object properties', () => {
		expect(renderObjFunc('arg1', 'arg2', 'arg3', 'arg4', 'arg5')).toHaveProperty('event');
		expect(renderObjFunc('arg1', 'arg2', 'arg3', 'arg4', 'arg5')).toHaveProperty('eventCategory');
		expect(renderObjFunc('arg1', 'arg2', 'arg3', 'arg4', 'arg5')).toHaveProperty('eventAction');
		expect(renderObjFunc('arg1', 'arg2', 'arg3', 'arg4', 'arg5')).toHaveProperty('eventLabel');
	});
	it('Should check the type', () => {
		expect(typeof renderObjFunc('arg1', 'arg2', 'arg3', 'arg4', 'arg5')).toBe('object');
		expect(typeof renderObjFunc('arg1', 'arg2', 'arg3', 'arg4', 'arg5').event).toBe('string');
		expect(typeof renderObjFunc('arg1', 'arg2', 'arg3', 'arg4', 'arg5').eventCategory).toBe('string');
		expect(typeof renderObjFunc('arg1', 'arg2', 'arg3', 'arg4', 'arg5').eventAction).toBe('string');
		expect(typeof renderObjFunc('arg1', 'arg2', 'arg3', 'arg4', 'arg5').eventLabel).toBe('string');
	});
});

describe('Checking output values', () => {
	it('Should check arguments if not present', () => {
		expect(renderObjFunc()).toBeNull();
		expect(renderObjFunc(100)).toBeNull();
	});
	it('Should check for numbers being passed in', () => {
		expect(renderObjFunc(10, 10, 5, 3, 7)).toBeNull();
		expect(renderObjFunc(200, -2, -4.5, 4, 5)).toBeNull();
		expect(renderObjFunc(0, 1 * 36, 89, 11, 1000)).toBeNull();
	});
	it('Should check for objects being passed in', () => {
		expect(renderObjFunc({}, 10, 5, 3, 7)).toBeNull();
		expect(renderObjFunc(200, -2, -4.5, 4, {})).toBeNull();
		expect(renderObjFunc(0, {}, 89, 11, 1000)).toBeNull();
	});
	it('Should check for arrays being passed in', () => {
		expect(renderObjFunc([], 10, 5, 3, 7)).toBeNull();
		expect(renderObjFunc(200, -2, -4.5, 4, [])).toBeNull();
		expect(renderObjFunc(0, [], 89, 11, 1000)).toBeNull();
	});
});

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