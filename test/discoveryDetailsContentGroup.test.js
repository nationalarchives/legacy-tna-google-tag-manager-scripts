import { discoveryDetailsContentGroup } from '../src/discoveryDetailsContentGroup';

document.body.innerHTML =
    '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>' +
    '<meta name="WT.cg_n" content="View records of other archives">' +
    '<meta name="DCSext.docref" content="Division within WO">' +
    '<meta name="DCSext.filtertype" content="Date">' +
    '<meta name="DCSext.searchtype" content="Records filtered search">' +
    '<meta name="DCSext.colltype" content="NRA" />' +
    '<meta name="DCSext.dsource" content="MDR" />' +
    '<meta name="DCSext.place" content="Hornby, Yorkshire" />' +
    '<meta name="DCSext.rdata" content="GB/NNAF/M172908">' +
    '<meta name = "DCSext.repository" content="London Metropolitan Archives" />';

//console.log(Object.getOwnPropertyNames(discoveryDetailsContentGroup()));

describe('arrayContaining', () => {
    const expected = Object.getOwnPropertyNames(discoveryDetailsContentGroup());
    it('matches even if received contains additional elements', () => {
        expect(["event", "eventCategory", "eventAction", "eventLabel", "ContentGroup"]).toEqual(expect.arrayContaining(expected));
    });
    it('does not match if received does not contain expected elements', () => {
        expect(['Bob', 'Eve']).not.toEqual(expect.arrayContaining(expected));
    });
});