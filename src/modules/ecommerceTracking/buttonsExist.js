export let buttonsExist = (obj) => {
    Object.keys(obj).forEach((property) => {
        let buttons = document.querySelectorAll(property);
        buttons.forEach((button) => {
            button.addEventListener('click', obj[property]);
        });
    });
};