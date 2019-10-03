import { watermarkObject } from './watermarkObj';
import { baseWTEGObjFunc } from '../baseWTEGPromoObj';
import { defaultDiscoveryServerSideObject } from './defaultDiscoveryServerSideObj';
import { extractMetaTagContent } from '../extractMetaTagContent';
import { verifyUrl } from './verifyURL';
import { otherArchivesObj } from '../otherArchivesObj';

export let buildObject = watermarkPresent => {
	let gtmDL;
	let contentGroup = verifyUrl(
		window.location.pathname,
		'/account/',
		extractMetaTagContent('DCSext\\.signedin'),
		extractMetaTagContent('WT\\.cg_n')
	);
	let wtegMetaTag = document.querySelector('meta[name = DCSext\\.wteg]');
	let dsource = extractMetaTagContent('DCSext\\.dsource');
	let colltype = extractMetaTagContent('DCSext\\.colltype');

	if (watermarkPresent) {
		gtmDL = Object.assign(
			watermarkObject(
				'ivp',
				extractMetaTagContent('DCSext\\.imgviewer'),
				'Image viewer',
				'Below record description'
			),
			defaultDiscoveryServerSideObject(
				contentGroup,
				extractMetaTagContent('DCSext\\.docref'),
				extractMetaTagContent('DCSext\\.subscription'),
				extractMetaTagContent('DCSext\\.signedin'),
				extractMetaTagContent('DCSext\\.readertype')
			)
		);
	} else if (wtegMetaTag !== null) {
		gtmDL = Object.assign(
			baseWTEGObjFunc(
				'wteg',
				extractMetaTagContent('DCSext\\.wteg'),
				'Expanding button',
				'Below catalogue description'
			),
			defaultDiscoveryServerSideObject(
				contentGroup,
				extractMetaTagContent('DCSext\\.docref'),
				extractMetaTagContent('DCSext\\.subscription'),
				extractMetaTagContent('DCSext\\.signedin'),
				extractMetaTagContent('DCSext\\.readertype')
			)
		);
	} else if (colltype !== null) {
		gtmDL = Object.assign(
			otherArchivesObj(
				colltype,
				extractMetaTagContent('DCSext\\.place'),
				extractMetaTagContent('DCSext\\.rdata'),
				extractMetaTagContent('DCSext\\.reposlocate')
			),
			defaultDiscoveryServerSideObject(
				contentGroup,
				extractMetaTagContent('DCSext\\.docref'),
				extractMetaTagContent('DCSext\\.subscription'),
				extractMetaTagContent('DCSext\\.signedin'),
				extractMetaTagContent('DCSext\\.readertype')
			)
		);
	} else if (dsource !== null) {
		gtmDL = Object.assign(
			otherArchivesObj(
				dsource,
				extractMetaTagContent('DCSext\\.place'),
				extractMetaTagContent('DCSext\\.rdata'),
				extractMetaTagContent('DCSext\\.reposlocate')
			),
			defaultDiscoveryServerSideObject(
				contentGroup,
				extractMetaTagContent('DCSext\\.docref'),
				extractMetaTagContent('DCSext\\.subscription'),
				extractMetaTagContent('DCSext\\.signedin'),
				extractMetaTagContent('DCSext\\.readertype')
			)
		);
	} else {
		gtmDL = defaultDiscoveryServerSideObject(
			contentGroup,
			extractMetaTagContent('DCSext\\.docref'),
			extractMetaTagContent('DCSext\\.subscription'),
			extractMetaTagContent('DCSext\\.signedin'),
			extractMetaTagContent('DCSext\\.readertype')
		);
	}
	return gtmDL;
};
