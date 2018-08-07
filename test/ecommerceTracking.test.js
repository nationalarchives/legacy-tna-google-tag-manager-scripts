import{extractMetaTagContent} from '../src/modules/extractMetaTagContent';

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
    });
});