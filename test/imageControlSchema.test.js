import {controlObj} from '../src/modules/imageViewer/imageControlSchema';

describe('Should have the defined property & type of arguments', ()=>{
    it('Should have the defined property', () => {
        let argFunc = () => 'This is a function'
        expect(controlObj('arg1', 'arg2', 'arg3', argFunc)).toHaveProperty('event');
        expect(controlObj('arg1', 'arg2', 'arg3', argFunc)).toHaveProperty('eventCategory');
        expect(controlObj('arg1', 'arg2', 'arg3', argFunc)).toHaveProperty('eventAction');
        expect(controlObj('arg1', 'arg2', 'arg3', argFunc)).toHaveProperty('eventLabel');
    });
    it('Should test the argument type', ()=>{

    });
});
