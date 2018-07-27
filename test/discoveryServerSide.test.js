import{
    ExtractTagsModule
} from '../src/discoveryServerSide';

import{
    BuildObjectModule
} from '../src/modules/buildObject.js';

import{
    RemoveNullValuesModule
} from '../src/modules/removeNullValues.js';

import{
    EcommerceObjectModule
} from '../src/modules/ecommerceObj.js';

import{
    DefaultObjectModule
} from '../src/modules/defaultObj.js';

import{
    GtmDLModule
} from '../src/buildGtmObject.js';

document.body.innerHTML =
    '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>' +
    //<meta name="WT.cg_n" content="View records of other archives">
    '<meta name="DCSext.filtertype" content="Date">' +
    '<meta name="DCSext.searchtype" content="Records filtered search">' +
    '<meta name="DCSext.colltype" content="NRA" />' +
    '<meta name="DCSext.dsource" content="MDR" />' +
    '<meta name="DCSext.place" content="Hornby, Yorkshire" />' +
    '<meta name="DCSext.rdata" content="GB/NNAF/M172908">' +
    '<meta name="DCSext.repository" content="London Metropolitan Archives" />' +
    '<meta name="WT.cg_n" content="View TNA record description">' +
    '<meta name="DCSext.docref" content="Division within WO">' +

    //Stage 1 Default
    '<meta name="DCSext.signedin" content="Not signed-in" />' +
    '<meta name="DCSext.subscription" content="not subscribed">' +
    '<meta name="DCSext.imgviewer" content="Image Viewer Watermarked">';

describe('Tests custom message data type', () =>{
    it('Should be of string data type', () =>{
        expect(typeof ExtractTagsModule.extractMetaTagContent(null, 'Custom message...')).toBe('string');
    })
});

describe('Gets the meta tag content value', () => {
    it('Should return content if meta tag exists, else return custom message', () => {
        expect(ExtractTagsModule.extractMetaTagContent(null, null)).toBe(null);
        expect(ExtractTagsModule.extractMetaTagContent(null, 'This is the msg...')).toBe('This is the msg...');
        expect(ExtractTagsModule.extractMetaTagContent(null, 'Meta tag does not exist')).toBe('Meta tag does not exist');
        expect(ExtractTagsModule.extractMetaTagContent('meta[name=WT\\.cg_n]', 'Content group not available')).toBe('View TNA record description');
        expect(ExtractTagsModule.extractMetaTagContent('meta[name=DCSext\\.docref]', null)).toBe('Division within WO');
        expect(ExtractTagsModule.extractMetaTagContent('meta[name=DCSext\\.signedin]', 'Registered info not available')).toBe('Not signed-in');
        expect(ExtractTagsModule.extractMetaTagContent('meta[name=DCSext\\.subscription]', 'Subscriber info not available')).toBe('not subscribed');
        expect(ExtractTagsModule.extractMetaTagContent('meta[name=DCSext\\.imgviewer]', null)).toBe('Image Viewer Watermarked');
    })
});

describe('Checks that the object is built correctly', () => {
    it('Should return type "object"', () => {
        expect(typeof RemoveNullValuesModule.removeNullValues(BuildObjectModule.buildObject(true))).toBe('object');
        expect(typeof RemoveNullValuesModule.removeNullValues(BuildObjectModule.buildObject(false))).toBe('object');
    })
});

describe('Checks that the correct elements are added/subtracted from the object', () => {
    it('Should return ecommerce if the watermark exists, else excludes it', () =>{
        expect(RemoveNullValuesModule.removeNullValues(BuildObjectModule.buildObject(true))).toBe(Object.assign(EcommerceObjectModule.ecommerceObj, DefaultObjectModule.defaultObj));
        expect(RemoveNullValuesModule.removeNullValues(BuildObjectModule.buildObject(false))).toBe(DefaultObjectModule.defaultObj);
    })
});

describe('Check GtmDL data type', () => {
    it('Should be of data type object', () =>{
        expect(typeof GtmDLModule.gtmDL()).toBe('object');
    })
});