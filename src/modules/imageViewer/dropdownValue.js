//import {imageViewer} from '../../imageViewer';

//export const dropDownValue = imageViewer.querySelector(select).value;

export const dropDownValue = (sel) => {
    let opt;
    for ( var i = 0, len = sel.options.length; i < len; i++ ) {
        opt = sel.options[i];
        if ( opt.selected === true ) {
            break;
        }
    }
    return opt;
};

/*function getSelectedOption(sel) {
  var opt;
  for ( var i = 0, len = sel.options.length; i < len; i++ ) {
    opt = sel.options[i];
    if ( opt.selected === true ) {
      break;
    }
  }
  return opt;
}*/
