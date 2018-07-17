import { checkDataLayerFormSubmit } from '../src/modules/checkDataLayerFormSubmit';

describe('Test checkDataLayerFormSubmit module', ()=> {
    window.datalayer = window.datalayer || [];

    it('returns a boolean value', ()=> {
        expect(typeof checkDataLayerFormSubmit(window.datalayer)).toBe('boolean')
    });
    it('returns true, and if it is then the data passed into the parameter it\'s an array', ()=> {
        expect(checkDataLayerFormSubmit(window.datalayer)).toBeTruthy();
    });
    it('returns false, and if it is then the data passed into the parameter it\'s not an array', ()=> {
        expect(checkDataLayerFormSubmit('')).toBeFalsy();
    })
});