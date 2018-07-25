let RemoveNullValuesModule = (function(){
    return{
        removeNullValues : function(obj){
            for(let property in obj){
                if(obj[property] === null || obj[property] === undefined){
                    delete obj[property];
                }
            }
            return obj;
        }
    }
})();

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports.RemoveNullValuesModule = RemoveNullValuesModule;
}