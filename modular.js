var mymodule = require('./modular ex6.js');
var dir = process.argv[2];
var filterStr = process.argv[3];
var ext = '.' + process.argv[3];

function printConsole()
{
	console.log(tempfile);
}

mymodule(dir,filterStr,printConsole);