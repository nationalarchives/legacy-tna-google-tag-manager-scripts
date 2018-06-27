let getFormIDByClassName = (cls) => {
    let form = document.getElementsByClassName(cls);

    return form[0].getAttribute('id');
}

module.exports.getFormIDByClassName = getFormIDByClassName;