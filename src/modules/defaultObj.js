import{ extractMetaTagContent} from './extractMetaTagContent';

export let defaultObject = {
    'ContentGroup': extractMetaTagContent('WT\\.cg_n', 'Content Group not available'),
    'customDimension1': extractMetaTagContent('DCSext\\.docref', null),
    'customDimension2': extractMetaTagContent('DCSext\\.subscription', 'Subscriber info not available'),
    'customDimension3': extractMetaTagContent('DCSext\\.signedin', 'Registered info not available')
};