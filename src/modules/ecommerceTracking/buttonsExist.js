export let buttonsExist = (buttonCheck, func) => {
    let buttons = document.querySelectorAll(buttonCheck);
    if(buttons.length > 0){
        for(let button of buttons){
            button.addEventListener('click', func);
            console.log('Button clicked.');
        }
    }
    else{

        console.log('Button does not exist.');
    }
};
