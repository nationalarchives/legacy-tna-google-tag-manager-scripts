export let buttonsExist = (buttons, func) => {
    buttons = document.querySelectorAll(buttons);
    if(buttons.length > 0){
        for(let button in buttons){
            button.addEventListener('click', func);
        }
    }
    else{
        console.log('Button does not exist.');
    }
};