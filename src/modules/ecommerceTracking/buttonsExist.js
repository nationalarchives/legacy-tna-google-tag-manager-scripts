export let buttonsExist = (obj) => {
    for (let property in obj) {
        let buttons = document.querySelectorAll(property);
        if (buttons.length > 0) {
            for (let button of buttons) {
                button.addEventListener('click', obj[property]);
            }
        }
    }
};