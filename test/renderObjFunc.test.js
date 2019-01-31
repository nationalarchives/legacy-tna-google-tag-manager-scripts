import renderObjFunc from '../src/modules/renderObjFunc';

describe('Checking the object, property and type', () => {
	it('Should have the object properties', () => {
        expect(renderObjFunc('eventArg', 'catArg', 'actionArg', 'labelArg')).toHaveProperty('event');
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
		expect(renderObjFunc(200, 'Test', 'Test', 'Test')).toBeNull();
	});
	it('Should check for objects being passed in', () => {
		expect(renderObjFunc({}, 'test', 5, 3, 7)).toBeNull();
		expect(renderObjFunc(200, -2, -4.5, 4, {})).toBeNull();
		expect(renderObjFunc(0, {}, 89, 11, 1000)).toBeNull();
	});
	it('Should check for arrays being passed in', () => {
		expect(renderObjFunc([], '10', [5], 3, 7)).toBeNull();
		expect(renderObjFunc(200, -2, -4.5, 4, [])).toBeNull();
		expect(renderObjFunc(0, [], 89, 11, 1000)).toBeNull();
	});
});