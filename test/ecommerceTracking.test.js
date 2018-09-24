import{calculateQuantity} from '../src/modules/ecommerceTracking/calculateQuantity';
import{buildProductsObjArray} from '../src/modules/ecommerceTracking/buildProductsObjArray';
import{extractMetaTagContent} from '../src/modules/extractMetaTagContent';
import{extractProductName} from '../src/modules/ecommerceTracking/extractProductName';
import{buildEcommerceObj} from '../src/modules/ecommerceTracking/buildEcommerceObj';

document.body.innerHTML =
    '<meta name="WT.si_n" content="Discovery store">' +
    '<meta name="WT.si_p" content="Step 4">' +
    '<meta name="WT.pn_fa" content="Digital Record">' +
    '<meta name="WT.pn_gr" content="The National Archives">' +
    '<meta name="WT.pn_sku" content="AIR 50/163/32">' +
    '<meta name="WT.tx_u" content="1">' +
    '<meta name="WT.tx_s" content="3.50">' +
    '<meta name="WT.tx_total" content="3.50">' +
    '<meta name="WT.tx_id" content="I/657715845504212R">';

describe('Checking that the content attribute is returned', () => {
    it('Should return the meta tag content if the tag exists', () => {
        expect(extractMetaTagContent('WT\\.si_n', 'Meta tag not available')).toBe('Discovery store');
        expect(extractMetaTagContent('WT\\.si_p', 'Meta tag not available')).toBe('Step 4');
        expect(extractMetaTagContent('WT\\.pn_fa', 'Meta tag not available')).toBe('Digital Record');
        expect(extractMetaTagContent('WT\\.pn_gr', 'Meta tag not available')).toBe('The National Archives');
        expect(extractMetaTagContent('WT\\.pn_sku', 'Meta tag not available')).toBe('AIR 50/163/32');
        expect(extractMetaTagContent('WT\\.tx_u', 'Meta tag not available')).toBe('1');
        expect(extractMetaTagContent('WT\\.tx_s', 'Meta tag not available')).toBe('3.50');
        expect(extractMetaTagContent('WT\\.tx_total', 'Meta tag not available')).toBe('3.50');
        expect(extractMetaTagContent('WT\\.tx_id', 'Meta tag not available')).toBe('I/657715845504212R');
        expect(extractMetaTagContent('metaTagDoesNotExist', 'Meta tag not available')).toBe('Meta tag not available');
        expect(extractMetaTagContent(1, {})).toEqual({});
        expect(extractMetaTagContent(1, 2345)).toEqual(2345);
    });
});

describe('Checking that the quantity is calculated correctly', () => {
    it('Should return an array of values/quantities', () => {
        expect(calculateQuantity(['Product 1', 'Product 1', 'Product 2', 'Product 2', 'Product 3'])).toEqual({
            'Product 1': [0, 1],
            'Product 2': [2, 3],
            'Product 3': [4]
        });
    });
    it('Should return undefined if parameter is not an array', () => {
        expect(calculateQuantity('Some value')).toBe('The parameter is of the incorrect data type.');
        expect(calculateQuantity({})).toBe('The parameter is of the incorrect data type.');
    });
});

describe('Checking that the name is extracted correctly', () => {
    it('Should return all values before the first slash in the record ID (with duplicates removed)', () => {
        expect(extractProductName(['AIR 50/163/32','CO 700/BARBADOS9A', 'WO 398/188/14', 'PROB 11/611/331'])).toEqual(['AIR 50', 'CO 700', 'WO 398', 'PROB 11']);
    });
    it('Should return undefined if parameter is not an array', () => {
        expect(extractProductName('someString')).toEqual('The parameter is of the incorrect data type.');
        expect(extractProductName(1)).toEqual('The parameter is of the incorrect data type.');
    });
});

describe('Checking that the \'products\' object property is of type array', () => {
    it('Should return true if the parameters are of the correct data type', () => {
        expect(Array.isArray(buildProductsObjArray([], [], [], [], {}))).toBeTruthy();
    });
    it('Should return false if the parameters are the incorrect data type', () => {
        expect(Array.isArray(buildProductsObjArray('someString',2,true,[],{}))).toBeFalsy();
        expect(buildProductsObjArray('someString',2,true,[],{})).toBe('The parameters are of the incorrect data type.');
    });
});

describe('Checking the ecommerce is built correctly', () => {
    it('Should have the defined property', () => {
        expect(buildEcommerceObj('arg1','arg2','arg3','arg4',[{'arg1' : 'someValue'}])).toHaveProperty('event');
        expect(buildEcommerceObj('arg1','arg2','arg3','arg4',[{'arg1' : 'someValue'}])).toHaveProperty('ecommerce');
        expect(buildEcommerceObj('arg1','arg2','arg3','arg4',[{'arg1' : 'someValue'}]).ecommerce).toHaveProperty('actionField');
        expect(buildEcommerceObj('arg1','arg2','arg3','arg4',[{'arg1' : 'someValue'}]).ecommerce).toHaveProperty('purchase');
        expect(buildEcommerceObj('arg1','arg2','arg3','arg4',[{'arg1' : 'someValue'}]).ecommerce.actionField).toHaveProperty('step');
        expect(buildEcommerceObj('arg1','arg2','arg3','arg4',[{'arg1' : 'someValue'}]).ecommerce.actionField).toHaveProperty('option');
        expect(buildEcommerceObj('arg1','arg2','arg3','arg4',[{'arg1' : 'someValue'}]).ecommerce.purchase).toHaveProperty('actionField');
        expect(buildEcommerceObj('arg1','arg2','arg3','arg4',[{'arg1' : 'someValue'}]).ecommerce.purchase).toHaveProperty('products');
        expect(buildEcommerceObj('arg1','arg2','arg3','arg4',[{'arg1' : 'someValue'}]).ecommerce.purchase.actionField).toHaveProperty('id');
        expect(buildEcommerceObj('arg1','arg2','arg3','arg4',[{'arg1' : 'someValue'}]).ecommerce.purchase.actionField).toHaveProperty('affiliation');
        expect(buildEcommerceObj('arg1','arg2','arg3','arg4',[{'arg1' : 'someValue'}]).ecommerce.purchase.actionField).toHaveProperty('revenue');
        expect(buildEcommerceObj('arg1','arg2','arg3','arg4',[{'arg1' : 'someValue'}]).ecommerce.purchase.actionField).toHaveProperty('tax');
        expect(buildEcommerceObj('arg1','arg2','arg3','arg4',[{'arg1' : 'someValue'}]).ecommerce.purchase.actionField).toHaveProperty('shipping');
    });
    it('Should have the defined type', () => {
        expect(typeof buildEcommerceObj('arg1','arg2','arg3','arg4',[{'arg1' : 'someValue'}]).event).toBe('string');
        expect(typeof buildEcommerceObj('arg1','arg2','arg3','arg4',[{'arg1' : 'someValue'}]).ecommerce).toBe('object');
        expect(typeof buildEcommerceObj('arg1','arg2','arg3','arg4',[{'arg1' : 'someValue'}]).ecommerce.actionField).toBe('object');
        expect(typeof buildEcommerceObj('arg1','arg2','arg3','arg4',[{'arg1' : 'someValue'}]).ecommerce.actionField.option).toBe('string');
        expect(typeof buildEcommerceObj('arg1','arg2','arg3','arg4',[{'arg1' : 'someValue'}]).ecommerce.actionField.step).toBe('string');
        expect(typeof buildEcommerceObj('arg1','arg2','arg3','arg4',[{'arg1' : 'someValue'}]).ecommerce.purchase).toBe('object');
        expect(typeof buildEcommerceObj('arg1','arg2','arg3','arg4',[{'arg1' : 'someValue'}]).ecommerce.purchase.actionField).toBe('object');
        expect(typeof buildEcommerceObj('arg1','arg2','arg3','arg4',[{'arg1' : 'someValue'}]).ecommerce.purchase.actionField.id).toBe('string');
        expect(typeof buildEcommerceObj('arg1','arg2','arg3','arg4',[{'arg1' : 'someValue'}]).ecommerce.purchase.actionField.affiliation).toBe('string');
        expect(typeof buildEcommerceObj('arg1','arg2','arg3','arg4',[{'arg1' : 'someValue'}]).ecommerce.purchase.actionField.revenue).toBe('string');
        expect(typeof buildEcommerceObj('arg1','arg2','arg3','arg4',[{'arg1' : 'someValue'}]).ecommerce.purchase.actionField.tax).toBe('string');
        expect(typeof buildEcommerceObj('arg1','arg2','arg3','arg4',[{'arg1' : 'someValue'}]).ecommerce.purchase.actionField.shipping).toBe('string');
        expect(Array.isArray(buildEcommerceObj('arg1','arg2','arg3','arg4',[{'arg1' : 'someValue'}]).ecommerce.purchase.products)).toBeTruthy();
    });
    it('Should return undefined if the parameters are of the wrong data type', () => {
        expect(buildEcommerceObj(true,false,[],{},123)).toBe('The parameters are of the incorrect data type.');
    });
});