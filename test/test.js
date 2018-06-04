import {hello } from '../src/discoveryDetailsContentGroup';

describe('hello', () => {
    it('should output hello', () => {
        expect(hello()).toBe('Hello');
    });
});