export let alternateButtonsExist = (obj) => {
    for (let property in obj) {
        let buttons = document.querySelectorAll(property);
        if (buttons.length > 0) {
            console.log(buttons);
            for (let button of buttons) {
                button.addEventListener('click', obj[property]);
            }
        }
    }
};