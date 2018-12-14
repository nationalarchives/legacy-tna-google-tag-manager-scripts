import {controlObj} from '../src/modules/imageViewer/imageControlSchema';

describe('Should have the defined property', ()=>{
    it('Should have the defined property', () => {
        expect(controlObj('arg1', 'arg2', 'arg3', 'arg4', 'arg5')).toHaveProperty('event');
        expect(controlObj('arg1', 'arg2', 'arg3', 'arg4', 'arg5')).toHaveProperty('eventCategory');
        expect(controlObj('arg1', 'arg2', 'arg3', 'arg4', 'arg5')).toHaveProperty('eventAction');
        expect(controlObj('arg1', 'arg2', 'arg3', 'arg4', 'arg5')).toHaveProperty('eventLabel');
    });
});
