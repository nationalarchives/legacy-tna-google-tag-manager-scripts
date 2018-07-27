const pushInDataLayer = (obj) => {
    let wd = window.dataLayer || [];
    wd.push(obj);
    console.log(wd);
    return wd;
};

module.exports.pushInDataLayer = pushInDataLayer;