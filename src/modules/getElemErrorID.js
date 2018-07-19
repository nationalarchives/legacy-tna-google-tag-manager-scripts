let getElemErrorID = (errArr,errMsg) => {
    for (var i = 0; i < errMsg.length; i++) {
        if (Array.isArray(errMsg[i].getAttribute('id'), errArr)) {
            return;
        }
        errArr.push(errMsg[i].getAttribute('id'));
    }
};

module.exports.getElemErrorID = getElemErrorID;