import {helloWorld } from '../src/discoveryDetailsContentGroup';

describe('hello', () => {
    it('should output hello world', () => {
        expect(helloWorld()).toBe('Hello World');
    });
});