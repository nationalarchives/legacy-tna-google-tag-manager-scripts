import { buildObject } from '../src/modules/discoveryServerSide/buildDiscoveryServerSideObj';
import { removeNullValues } from '../src/modules/removeNullValues';
import { watermarkObject } from '../src/modules/discoveryServerSide/watermarkObj';
import { defaultDiscoveryServerSideObject } from '../src/modules/discoveryServerSide/defaultDiscoveryServerSideObj';
import { extractMetaTagContent } from '../src/modules/extractMetaTagContent';
import { watermarkCheck } from '../src/modules/discoveryServerSide/watermarkCheck';
import { otherArchivesObj } from '../src/modules/otherArchivesObj';

let initialiseDOM = () => {
	document.body.innerHTML =
		'<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>' +
		'<meta name="DCSext.filtertype" content="Date">' +
		'<meta name="DCSext.searchtype" content="Records filtered search">' +
		'<meta name="DCSext.place" content="Hornby, Yorkshire" />' +
		'<meta name="DCSext.rdata" content="GB/NNAF/M172908">' +
		'<meta name="DCSext.repository" content="London Metropolitan Archives" />' +
		'<meta name="WT.cg_n" content="View TNA record description">' +
		'<meta name="DCSext.docref" content="Division within WO">' +
		//Stage 1 Default
		'<meta name="DCSext.signedin" content="Not signed-in" />' +
		'<meta name="DCSext.subscription" content="not subscribed">' +
		'<meta name="DCSext.imgviewer" content="Image Viewer Watermarked">' +
		'<meta name="DCSext.readertype" content="OnSitePublic">';
};

let addMetaTag = (metaTag, name, content) => {
	let body = document.querySelector('body');
	metaTag = document.createElement('meta');
	metaTag.setAttribute('name', name);
	metaTag.setAttribute('content', content);
	body.appendChild(metaTag);
};

beforeEach(() => {
	initialiseDOM();
});

describe('Gets meta tag content', () => {
	it('Should return value of content attribute', () => {
		expect(extractMetaTagContent('DCSext\\.signedin', 'msg')).toBe(
			'Not signed-in'
		);
		expect(extractMetaTagContent('DCSext\\.subscription', 'msg')).toBe(
			'not subscribed'
		);
		expect(extractMetaTagContent('DCSext\\.imgviewer', 'msg')).toBe(
			'Image Viewer Watermarked'
		);
		expect(extractMetaTagContent('DCSext\\.docref', 'msg')).toBe(
			'Division within WO'
		);
		expect(extractMetaTagContent('WT\\.cg_n', 'msg')).toBe(
			'View TNA record description'
		);
	});
});

describe('Checking that a custom message is returned if meta tag does not exist', () => {
	it('Should return custom message', () => {
		expect(extractMetaTagContent('nonExistentMetaTag', null)).toBe(null);
	});
});

describe('Checking the object is built correctly', () => {
	it('Should return type object', () => {
		expect(typeof buildObject(true)).toBe('object');
		expect(typeof buildObject(false)).toBe('object');
	});
});

describe('Checking the data type of the parameter passed to removeNullValues', () => {
	it('Should be an object', () => {
		expect(typeof removeNullValues({})).toBe('object');
		expect(typeof removeNullValues({ someProperty: 'someValue' })).toBe('object');
	});
});

describe('Checking that null values are removed', () => {
	it('Should remove any null values/properties from the object', () => {
		expect(
			removeNullValues(
				defaultDiscoveryServerSideObject(
					extractMetaTagContent('WT\\.cg_n'),
					extractMetaTagContent('metaTagDoesNotExist'),
					extractMetaTagContent('DCSext\\.subscription'),
					extractMetaTagContent('DCSext\\.signedin'),
					extractMetaTagContent('DCSext\\.readertype')
				)
			)
		).toEqual({
			ContentGroup: 'View TNA record description',
			customDimension2: 'not subscribed',
			customDimension3: 'Not signed-in',
			customDimension8: 'OnSitePublic'
		});
	});
});

describe('Checking the correct elements are added/subtracted from the object', () => {
	it('Should return ecommerce if the watermark exists, else excludes it', () => {
		expect(buildObject(true)).toEqual(
			Object.assign(
				watermarkObject(
					'ivp',
					extractMetaTagContent('DCSext\\.imgviewer'),
					'Image viewer',
					'Below record description'
				),
				defaultDiscoveryServerSideObject(
					extractMetaTagContent('WT\\.cg_n'),
					extractMetaTagContent('DCSext\\.docref'),
					extractMetaTagContent('DCSext\\.subscription'),
					extractMetaTagContent('DCSext\\.signedin'),
					extractMetaTagContent('DCSext\\.readertype')
				)
			)
		);
		expect(buildObject(false)).toEqual(
			defaultDiscoveryServerSideObject(
				extractMetaTagContent('WT\\.cg_n'),
				extractMetaTagContent('DCSext\\.docref'),
				extractMetaTagContent('DCSext\\.subscription'),
				extractMetaTagContent('DCSext\\.signedin'),
				extractMetaTagContent('DCSext\\.readertype')
			)
		);
	});
});

describe('Checking the default object has correct properties and value types', () => {
	it('Should have the defined property', () => {
		expect(
			defaultDiscoveryServerSideObject('arg1', 'arg2', 'arg3', 'arg4', 'arg5')
		).toHaveProperty('ContentGroup');
		expect(
			defaultDiscoveryServerSideObject('arg1', 'arg2', 'arg3', 'arg4', 'arg5')
		).toHaveProperty('customDimension1');
		expect(
			defaultDiscoveryServerSideObject('arg1', 'arg2', 'arg3', 'arg4', 'arg5')
		).toHaveProperty('customDimension2');
		expect(
			defaultDiscoveryServerSideObject('arg1', 'arg2', 'arg3', 'arg4', 'arg5')
		).toHaveProperty('customDimension3');
		expect(
			defaultDiscoveryServerSideObject('arg1', 'arg2', 'arg3', 'arg4', 'arg5')
		).toHaveProperty('customDimension8');
	});
	it('Should have the defined value types', () => {
		expect(
			typeof defaultDiscoveryServerSideObject(
				'arg1',
				'arg2',
				'arg3',
				'arg4',
				'arg5'
			).ContentGroup
		).toBe('string');
		expect(
			typeof defaultDiscoveryServerSideObject(
				'arg1',
				'arg2',
				'arg3',
				'arg4',
				'arg5'
			).customDimension1
		).toBe('string');
		expect(
			typeof defaultDiscoveryServerSideObject(
				'arg1',
				'arg2',
				'arg3',
				'arg4',
				'arg5'
			).customDimension2
		).toBe('string');
		expect(
			typeof defaultDiscoveryServerSideObject(
				'arg1',
				'arg2',
				'arg3',
				'arg4',
				'arg5'
			).customDimension3
		).toBe('string');
		expect(
			typeof defaultDiscoveryServerSideObject(
				'arg1',
				'arg2',
				'arg3',
				'arg4',
				'arg5'
			).customDimension8
		).toBe('string');
	});
});

describe('Checking the ecommerce object has correct properties and value types', () => {
	it('Should have the defined properties', () => {
		expect(
			watermarkObject(
				'ivp',
				extractMetaTagContent('DCSext\\.imgviewer'),
				'Image viewer',
				'Below record description'
			)
		).toHaveProperty('ecommerce');
		expect(
			watermarkObject(
				'ivp',
				extractMetaTagContent('DCSext\\.imgviewer'),
				'Image viewer',
				'Below record description'
			).ecommerce
		).toHaveProperty('promoView');
		expect(
			watermarkObject(
				'ivp',
				extractMetaTagContent('DCSext\\.imgviewer'),
				'Image viewer',
				'Below record description'
			).ecommerce.promoView
		).toHaveProperty('promotions');
		expect(
			watermarkObject(
				'ivp',
				extractMetaTagContent('DCSext\\.imgviewer'),
				'Image viewer',
				'Below record description'
			).ecommerce.promoView.promotions[0]
		).toHaveProperty('id');
		expect(
			watermarkObject(
				'ivp',
				extractMetaTagContent('DCSext\\.imgviewer'),
				'Image viewer',
				'Below record description'
			).ecommerce.promoView.promotions[0]
		).toHaveProperty('name');
		expect(
			watermarkObject(
				'ivp',
				extractMetaTagContent('DCSext\\.imgviewer'),
				'Image viewer',
				'Below record description'
			).ecommerce.promoView.promotions[0]
		).toHaveProperty('creative');
		expect(
			watermarkObject(
				'ivp',
				extractMetaTagContent('DCSext\\.imgviewer'),
				'Image viewer',
				'Below record description'
			).ecommerce.promoView.promotions[0]
		).toHaveProperty('position');
	});
	it('Should have the defined value types', () => {
		expect(typeof watermarkObject('arg1', 'arg2', 'arg3', 'arg4')).toBe('object');
		expect(typeof watermarkObject('arg1', 'arg2', 'arg3', 'arg4').ecommerce).toBe(
			'object'
		);
		expect(
			typeof watermarkObject('arg1', 'arg2', 'arg3', 'arg4').ecommerce.promoView
		).toBe('object');
		expect(
			typeof watermarkObject('arg1', 'arg2', 'arg3', 'arg4').ecommerce.promoView
				.promotions
		).toBe('object');
		expect(
			typeof watermarkObject('arg1', 'arg2', 'arg3', 'arg4').ecommerce.promoView
				.promotions[0].id
		).toBe('string');
		expect(
			typeof watermarkObject('arg1', 'arg2', 'arg3', 'arg4').ecommerce.promoView
				.promotions[0].name
		).toBe('string');
		expect(
			typeof watermarkObject('arg1', 'arg2', 'arg3', 'arg4').ecommerce.promoView
				.promotions[0].creative
		).toBe('string');
		expect(
			typeof watermarkObject('arg1', 'arg2', 'arg3', 'arg4').ecommerce.promoView
				.promotions[0].position
		).toBe('string');
	});
});

describe('Checking the response depending on whether a watermark exists or not', () => {
	it('Should return true if watermark exists, else return false', () => {
		expect(watermarkCheck('DCSext\\.imgviewer')).toBeTruthy();
		expect(watermarkCheck('metaTagDoesNotExist')).toBeFalsy();
	});
});

describe('Checking the correct elements are added/subtracted from the other archives object', () => {
	it('Should append otherArchivesObj to discoveryServerSideObj with the colltype value', () => {
		let colltypeMetaTag;
		addMetaTag(colltypeMetaTag, 'DCSext.colltype', 'NRA');

		expect(buildObject(false)).toEqual(
			Object.assign(
				otherArchivesObj(
					extractMetaTagContent('DCSext\\.colltype'),
					extractMetaTagContent('DCSext\\.place'),
					extractMetaTagContent('DCSext\\.rdata'),
					extractMetaTagContent('DCSext\\.reposlocate')
				),
				defaultDiscoveryServerSideObject(
					extractMetaTagContent('WT\\.cg_n'),
					extractMetaTagContent('DCSext\\.docref'),
					extractMetaTagContent('DCSext\\.subscription'),
					extractMetaTagContent('DCSext\\.signedin'),
					extractMetaTagContent('DCSext\\.readertype')
				)
			)
		);
	});

	it('Should append otherArchivesObj to discoveryServerSideObj with the dsource value', () => {
		let dsourceMetaTag;
		addMetaTag(dsourceMetaTag, 'DCSext.dsource', 'Manor');

		expect(buildObject(false)).toEqual(
			Object.assign(
				otherArchivesObj(
					extractMetaTagContent('DCSext\\.dsource'),
					extractMetaTagContent('DCSext\\.place'),
					extractMetaTagContent('DCSext\\.rdata'),
					extractMetaTagContent('DCSext\\.reposlocate')
				),
				defaultDiscoveryServerSideObject(
					extractMetaTagContent('WT\\.cg_n'),
					extractMetaTagContent('DCSext\\.docref'),
					extractMetaTagContent('DCSext\\.subscription'),
					extractMetaTagContent('DCSext\\.signedin'),
					extractMetaTagContent('DCSext\\.readertype')
				)
			)
		);
	});
});

describe('Checking the other archives object has correct properties and value types', () => {
	it('Should have the defined property', () => {
		expect(otherArchivesObj('arg1', 'arg2', 'arg3', 'arg4')).toHaveProperty(
			'customDimension4'
		);
		expect(otherArchivesObj('arg1', 'arg2', 'arg3', 'arg4')).toHaveProperty(
			'customDimension5'
		);
		expect(otherArchivesObj('arg1', 'arg2', 'arg3', 'arg4')).toHaveProperty(
			'customDimension6'
		);
		expect(otherArchivesObj('arg1', 'arg2', 'arg3', 'arg4')).toHaveProperty(
			'customDimension7'
		);
	});
	it('Should have the defined value types', () => {
		expect(
			typeof otherArchivesObj('arg1', 'arg2', 'arg3', 'arg4').customDimension4
		).toBe('string');
		expect(
			typeof otherArchivesObj('arg1', 'arg2', 'arg3', 'arg4').customDimension5
		).toBe('string');
		expect(
			typeof otherArchivesObj('arg1', 'arg2', 'arg3', 'arg4').customDimension6
		).toBe('string');
		expect(
			typeof otherArchivesObj('arg1', 'arg2', 'arg3', 'arg4').customDimension7
		).toBe('string');
	});
});
