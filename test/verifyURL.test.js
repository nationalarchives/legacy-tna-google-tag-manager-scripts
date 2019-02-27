import { verifyUrl } from '../src/modules/discoveryServerSide/verifyURL';
import { extractMetaTagContent } from '../src/modules/extractMetaTagContent';

document.body.innerHTML =
    '<meta name="DCSext.signedin" content="signed-in" />' +
    '<meta name="DCSext.notsignedin" content="Not signed-in" />';

let url = 'http://test.discovery.nationalarchives.gov.uk/account/bookmarks';
let signedIn = extractMetaTagContent('DCSext\\.signedin');
let notSignedIn = extractMetaTagContent('DCSext\\.notsignedin');

describe('Checks that the correct value is returned depending on the URL and login status', () => {
    it('Should return customer account if the path /account/ is passed and the user is authenticated, else returns default value', () => {
        expect(verifyUrl(url, '/account/', signedIn, 'defaultValue')).toBe('Customer account');
        expect(verifyUrl(url, '/account/', notSignedIn, 'defaultValue')).toBe('defaultValue');
        expect(verifyUrl(url, '/somepath/', signedIn, 'defaultValue')).toBe('defaultValue');
    });
});

describe('Checks that all parameters are of type string', () => {
    it('Should return account if the path /account/ is passed, else returns null', () => {
        expect(verifyUrl(url, '/account/', signedIn, 'defaultValue')).toBe('Customer account');
        expect(verifyUrl(123, 'abcdefg', signedIn, 'defaultValue')).toBe(null);
    });
});