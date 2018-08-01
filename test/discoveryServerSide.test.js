import{buildObject} from '../src/modules/buildObject';

import{removeNullValues} from '../src/modules/removeNullValues';

import{ecommerceObject} from '../src/modules/ecommerceObj';

import{defaultObject} from '../src/modules/defaultObj';

import{extractMetaTagContent} from '../src/modules/extractMetaTagContent';

import{gtmDL} from '../src/buildGtmObject';

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

describe('signed in meta tag content', () =>{
    it('should return value of content attribute', () => {
        expect(extractMetaTagContent('DCSext\\.signedin', 'msg')).toBe('Not signed-in');
    });
});

describe('subscription meta tag content', () =>{
    it('should return value of content attribute', () => {
        expect(extractMetaTagContent('DCSext\\.subscription', 'msg')).toBe('not subscribed');
    });
});

describe('imgviewer meta tag content', () =>{
    it('should return value of content attribute', () => {
        expect(extractMetaTagContent('DCSext\\.imgviewer', 'msg')).toBe('Image Viewer Watermarked');
    });
});

describe('docref meta tag content', () =>{
    it('should return value of content attribute', () => {
        expect(extractMetaTagContent('DCSext\\.docref', 'msg')).toBe('Division within WO');
    });
});

describe('content group meta tag content', () =>{
    it('should return value of content attribute', () => {
        expect(extractMetaTagContent('WT\\.cg_n', 'msg')).toBe('View TNA record description');
    });
});

describe('if meta tag does not exist, return custom message', () =>{
    it('should return custom message', () => {
        expect(extractMetaTagContent('nonExistentMetaTag', 'This meta tag does not exist')).toBe('This meta tag does not exist');
    });
});

describe('Tests custom message data type', () =>{
    it('Should be of string data type', () =>{
        expect(typeof extractMetaTagContent(null, 'Custom message...')).toBe('string');
    });
});

describe('Checks that the object is built correctly', () => {
    it('Should return type "object"', () => {
        expect(typeof removeNullValues(buildObject(true))).toBe('object');
        expect(typeof removeNullValues(buildObject(false))).toBe('object');
    });
});

describe('Checks that the correct elements are added/subtracted from the object', () => {
    it('Should return ecommerce if the watermark exists, else excludes it', () =>{
        expect(removeNullValues(buildObject(true))).toBe(Object.assign(ecommerceObject, defaultObject));
        expect(removeNullValues(buildObject(false))).toBe(defaultObject);
    });
});