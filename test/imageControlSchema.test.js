import { controlObj } from '../src/modules/imageViewer/imageControlSchema';

describe('Should have the defined property & type of arguments', () => {
	it('Should have the defined property', () => {
		expect(controlObj('arg1', 'arg2', 'arg3', 'arg4')).toHaveProperty('event');
		expect(controlObj('arg1', 'arg2', 'arg3', 'arg4')).toHaveProperty('eventCategory');
		expect(controlObj('arg1', 'arg2', 'arg3', 'arg4')).toHaveProperty('eventAction');
		expect(controlObj('arg1', 'arg2', 'arg3', 'arg4')).toHaveProperty('eventLabel');
	});
	it('Should test Defined', () => {
		expect(controlObj('arg1', 'arg2', 'arg3', '')).toBeDefined();
	});
	it('Should test arguments if not present', () => {
		expect(controlObj()).toMatchObject({
			'event': 'no event',
			'eventCategory': 'no event category',
			'eventAction': 'no event action',
			'eventLabel': 'no event label'
		});
		expect(controlObj('arg1', 'arg2', 'arg3', 'arg4')).toEqual({
			'event': 'arg1',
			'eventCategory': 'arg2',
			'eventAction': 'arg3',
			'eventLabel': 'arg4'
		});
		expect(controlObj('arg1', 'arg2', 'arg3')).toEqual({
			'event': 'arg1',
			'eventCategory': 'arg2',
			'eventAction': 'arg3',
			'eventLabel': 'no event label'
		});
		expect(controlObj('arg1', 'arg2')).toEqual({
			'event': 'arg1',
			'eventCategory': 'arg2',
			'eventAction': 'no event action',
			'eventLabel': 'no event label'
		});
		expect(controlObj('arg1')).toEqual({
			'event': 'arg1',
			'eventCategory': 'no event category',
			'eventAction': 'no event action',
			'eventLabel': 'no event label'
		});
	});
});
