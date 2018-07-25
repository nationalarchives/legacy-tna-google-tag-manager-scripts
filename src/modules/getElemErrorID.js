const getElemErrorID = (errArr, errMsg) => {

    for (let i = 0; i < errMsg.length; i++) {
        if (Array.isArray(errMsg[i].getAttribute('id'))) {
            return;
        }
        errArr.push(errMsg[i].getAttribute('id'));
    }

    return errArr;
};

module.exports.getElemErrorID = getElemErrorID;