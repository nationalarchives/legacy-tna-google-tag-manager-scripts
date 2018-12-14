import {controlObj} from '../src/modules/imageViewer/imageControlSchema';

describe('Should have the defined property & type of arguments', () => {
    it('Should have the defined property', () => {
        expect(controlObj('arg1', 'arg2', 'arg3', 'arg4')).toHaveProperty('event');
        expect(controlObj('arg1', 'arg2', 'arg3','arg4')).toHaveProperty('eventCategory');
        expect(controlObj('arg1', 'arg2', 'arg3', 'arg4')).toHaveProperty('eventAction');
        expect(controlObj('arg1', 'arg2', 'arg3', 'arg4')).toHaveProperty('eventLabel');
    });
    it('Should test Defined', ()=>{
        expect(controlObj('arg1', 'arg2', 'arg3', '')).toBeDefined();
    });
    it('Should test arguments if not present', () => {
        expect(controlObj()).toEqual({
            'event': 'no event',
            'eventCategory': 'no category',
            'eventAction': 'no event action',
            'eventLabel': 'no event label'
        });
    });
});
