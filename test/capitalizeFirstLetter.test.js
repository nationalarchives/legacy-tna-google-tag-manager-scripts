import { capitalizeFirstLetter } from '../src/modules/capitalizeFirstLetter';

describe('Checking the capitalization', () => {
	it('Should check the capitalization', () => {
		expect(capitalizeFirstLetter('hello world')).toBe('Hello world');
		expect(capitalizeFirstLetter('foo')).toBe('Foo');
		expect(capitalizeFirstLetter('bar')).toBe('Bar');
	});
});

describe('Checking the return value', () => {
	it('Should return null is nothing is passed in', () => {
		expect(capitalizeFirstLetter()).toBeNull();
		expect(capitalizeFirstLetter(1)).toBeNull();
		expect(capitalizeFirstLetter({})).toBeNull();
	});
});