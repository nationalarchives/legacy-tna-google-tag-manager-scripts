import{watermarkObject} from './watermarkObj';
import{baseWTEGObjFunc} from '../baseWTEGPromoObj';
import{defaultDiscoveryServerSideObject} from './defaultDiscoveryServerSideObj';
import{extractMetaTagContent} from '../extractMetaTagContent';
import{verifyUrl} from './verifyURL';

export let buildObject = (watermarkPresent) => {
    let gtmDL;
    let contentGroup = verifyUrl(window.location.pathname, '/account/', extractMetaTagContent('DCSext\\.signedin'), extractMetaTagContent('WT\\.cg_n'));
    let wtegMetaTag = document.querySelector('meta[name = DCSext\\.wteg]');

    if (watermarkPresent) {
        gtmDL = Object.assign(
            watermarkObject('ivp', extractMetaTagContent('DCSext\\.imgviewer'), 'Image viewer', 'Below record description'),
            defaultDiscoveryServerSideObject(contentGroup,
                extractMetaTagContent('DCSext\\.docref'), extractMetaTagContent('DCSext\\.subscription'),
                extractMetaTagContent('DCSext\\.signedin')
            )
        );
    }
    else if(wtegMetaTag !== null){
        gtmDL = Object.assign(
            baseWTEGObjFunc('wteg', extractMetaTagContent('DCSext\\.wteg'), 'Expanding button', 'Below catalogue description'),
            defaultDiscoveryServerSideObject(contentGroup,
                extractMetaTagContent('DCSext\\.docref'), extractMetaTagContent('DCSext\\.subscription'),
                extractMetaTagContent('DCSext\\.signedin')
            )
        );
    }
    else {
        gtmDL = defaultDiscoveryServerSideObject(contentGroup,
            extractMetaTagContent('DCSext\\.docref'), extractMetaTagContent('DCSext\\.subscription'),
            extractMetaTagContent('DCSext\\.signedin'));
    }
    return gtmDL;
};
