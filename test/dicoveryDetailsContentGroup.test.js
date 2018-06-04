import { hello, discoveryDetailsContentGroup } from '../src/discoveryDetailsContentGroup';

//console.log(discoveryDetailsContentGroup());
describe('discoveryDetailsContentGroup', () => {
    it('should get an output', () => {
       //expect(discoveryDetailsContentGroup().event).toBe('Discovery');
       expect(discoveryDetailsContentGroup().eventAction).toEqual('View records of other archives');
    });
});

describe('hello', () => {
    it('should output hello', () => {
        expect(hello()).toBe('Hello');
    });
});

