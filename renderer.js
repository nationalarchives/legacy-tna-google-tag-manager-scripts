const fs = require('fs');

function view (templateName,values,res){
    const fileContents = fs.readFileSync('./views/' + templateName + '.html');
    res.write(fileContents);
}

module.exports.view = view;