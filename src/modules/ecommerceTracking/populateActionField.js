import{extractMetaTagContent} from '../extractMetaTagContent';

export let populateActionField = (step) => {
    let actionField = {
        id : extractMetaTagContent('WT\\.tx_id'),
        affiliation : extractMetaTagContent('WT\\.si_n'),
        revenue : extractMetaTagContent('WT\\.tx_total'),
        tax : '0',
        shipping : '0'
    };

    if (step !== '4'){
        return {
            id : null,
            affiliation : null,
            revenue : null,
            tax : null,
            shipping : null
        };
    }
    return actionField;
};
