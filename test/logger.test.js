import {logger} from '../src/logger';

describe('Checking the string', () =>{
    it('', ()=>{
        expect(typeof logger.log('Using Jest')).toBe('string');
    });
});