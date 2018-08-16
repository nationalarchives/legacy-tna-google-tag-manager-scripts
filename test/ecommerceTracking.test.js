import{calculateQuantity} from '../src/modules/calculateQuantity';
import{buildProductsObjArray} from '../src/modules/buildProductsObjArray';
import{extractMetaTagContent} from '../src/modules/extractMetaTagContent';
import{extractProductName} from '../src/modules/extractProductName';
import{buildProductIndex} from '../src/modules/buildProductIndex';

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
    });
});

describe('Checking that the quantity is calculated correctly', () => {
    it('Should return an array of values/quantities', () => {
        expect(calculateQuantity(['Product 1', 'Product 1', 'Product 2', 'Product 2', 'Product 3'])).toEqual({'Product 1' : [0, 1], 'Product 2' : [2, 3], 'Product 3' : [4]});
        expect(calculateQuantity('Some value')).toEqual({});
    });
});

describe('Checking that the name is extracted correctly', () => {
    it('Should return all values before the first slash in the record ID (with duplicates removed)', () => {
        expect(extractProductName(['AIR 50/163/32','CO 700/BARBADOS9A', 'WO 398/188/14', 'PROB 11/611/331'])).toEqual(['AIR 50', 'CO 700', 'WO 398', 'PROB 11']);
    });
});

describe('Checking that the array amalgamating the 3 lists (products, prices, categories) is built correctly', () => {
    it('Should return an array with 3 strings, separated by commas, per index', () => {
        expect(buildProductIndex(['Product 1', 'Product 2', 'Product 3'], ['5.00', '10.00', '15.00'], ['Category 1', 'Category 2', 'Category 3'])).toEqual(['Product 1,5.00,Category 1', 'Product 2,10.00,Category 2', 'Product 3,15.00,Category 3']);
        expect(Array.isArray(buildProductIndex(['Product 1', 'Product 2', 'Product 3'], ['5.00', '10.00', '15.00'], ['Category 1', 'Category 2', 'Category 3']))).toBeTruthy();
    });
});