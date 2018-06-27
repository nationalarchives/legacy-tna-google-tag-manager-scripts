import {logger} from '../src/modules/logger';

describe('Checking the string', () =>{
    it('', ()=>{
        expect(typeof logger.log('Using Jest')).toBe('string');
    });
});