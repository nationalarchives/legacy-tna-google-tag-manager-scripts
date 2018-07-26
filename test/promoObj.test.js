import {promoObjFunc} from '../src/modules/promoObj';

describe('Checking the object, property and type', () => {
    it('Should have the defined property', () => {
        expect(promoObjFunc('arg1', 'arg2', 'arg3', 'arg4', 'arg5')).toHaveProperty('event');
        expect(promoObjFunc('arg1', 'arg2', 'arg3', 'arg4', 'arg5')).toHaveProperty('ecommerce');
        expect(promoObjFunc('arg1', 'arg2', 'arg3', 'arg4', 'arg5').ecommerce).toHaveProperty('promoClick');
        expect(promoObjFunc('arg1', 'arg2', 'arg3', 'arg4', 'arg5').ecommerce.promoClick.promotions[0]).toHaveProperty('id');
        expect(promoObjFunc('arg1', 'arg2', 'arg3', 'arg4', 'arg5').ecommerce.promoClick.promotions[0]).toHaveProperty('name');
        expect(promoObjFunc('arg1', 'arg2', 'arg3', 'arg4', 'arg5').ecommerce.promoClick.promotions[0]).toHaveProperty('creative');
        expect(promoObjFunc('arg1', 'arg2', 'arg3', 'arg4', 'arg5').ecommerce.promoClick.promotions[0]).toHaveProperty('position');
    });
    it('Should check the type', () => {
        expect(typeof promoObjFunc('arg1', 'arg2', 'arg3', 'arg4', 'arg5')).toBe('object');
        expect(typeof promoObjFunc('arg1', 'arg2', 'arg3', 'arg4', 'arg5').event).toBe('string');
        expect(typeof promoObjFunc('arg1', 'arg2', 'arg3', 'arg4', 'arg5').ecommerce).toBe('object');
        expect(typeof promoObjFunc('arg1', 'arg2', 'arg3', 'arg4', 'arg5').ecommerce.promoClick).toBe('object');
        expect(typeof promoObjFunc('arg1', 'arg2', 'arg3', 'arg4', 'arg5').ecommerce.promoClick).toBe('object');
        expect(typeof promoObjFunc('arg1', 'arg2', 'arg3', 'arg4', 'arg5').ecommerce.promoClick.promotions).toBe('object');
        expect(typeof promoObjFunc('arg1', 'arg2', 'arg3', 'arg4', 'arg5').ecommerce.promoClick.promotions[0].id).toBe('string');
        expect(typeof promoObjFunc('arg1', 'arg2', 'arg3', 'arg4', 'arg5').ecommerce.promoClick.promotions[0].name).toBe('string');
        expect(typeof promoObjFunc('arg1', 'arg2', 'arg3', 'arg4', 'arg5').ecommerce.promoClick.promotions[0].creative).toBe('string');
        expect(typeof promoObjFunc('arg1', 'arg2', 'arg3', 'arg4', 'arg5').ecommerce.promoClick.promotions[0].position).toBe('string');
    });
});