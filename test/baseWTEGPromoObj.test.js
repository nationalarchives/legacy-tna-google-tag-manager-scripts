import {baseWTEGObjFunc} from '../src/modules/baseWTEGPromoObj';

describe('Checking the object, property and type', () => {
    it('Should have the defined property', () => {
        expect(baseWTEGObjFunc('arg1', 'arg2', 'arg3', 'arg4')).toHaveProperty('ecommerce');
        expect(baseWTEGObjFunc('arg1', 'arg2', 'arg3', 'arg4').ecommerce).toHaveProperty('promoView');
        expect(baseWTEGObjFunc('arg1', 'arg2', 'arg3', 'arg4').ecommerce.promoView.promotions[0]).toHaveProperty('id');
        expect(baseWTEGObjFunc('arg1', 'arg2', 'arg3', 'arg4').ecommerce.promoView.promotions[0]).toHaveProperty('name');
        expect(baseWTEGObjFunc('arg1', 'arg2', 'arg3', 'arg4').ecommerce.promoView.promotions[0]).toHaveProperty('creative');
        expect(baseWTEGObjFunc('arg1', 'arg2', 'arg3', 'arg4').ecommerce.promoView.promotions[0]).toHaveProperty('position');
    });
    it('Should check the type', () => {
        expect(typeof baseWTEGObjFunc('arg1', 'arg2', 'arg3', 'arg4')).toBe('object');
        expect(typeof baseWTEGObjFunc('arg1', 'arg2', 'arg3', 'arg4').ecommerce).toBe('object');
        expect(typeof baseWTEGObjFunc('arg1', 'arg2', 'arg3', 'arg4').ecommerce.promoView).toBe('object');
        expect(typeof baseWTEGObjFunc('arg1', 'arg2', 'arg3', 'arg4').ecommerce.promoView.promotions).toBe('object');
        expect(typeof baseWTEGObjFunc('arg1', 'arg2', 'arg3', 'arg4').ecommerce.promoView.promotions[0].id).toBe('string');
        expect(typeof baseWTEGObjFunc('arg1', 'arg2', 'arg3', 'arg4').ecommerce.promoView.promotions[0].name).toBe('string');
        expect(typeof baseWTEGObjFunc('arg1', 'arg2', 'arg3', 'arg4').ecommerce.promoView.promotions[0].creative).toBe('string');
        expect(typeof baseWTEGObjFunc('arg1', 'arg2', 'arg3', 'arg4').ecommerce.promoView.promotions[0].position).toBe('string');
    });
});
