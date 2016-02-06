//console.log(process.argv);

var fs = require('fs');
// Synchronous way:-
// var fileToRead = process.argv[2];

// var bufRead = fs.readFileSync(fileToRead);
// var count = bufRead.toString().split('\n').length -1 ;
// console.log(count);

function reading(callback){
fs.readFile(process.argv[2], function finishedRead(err, data){
	if(err){console.error(err);}
	count = data.toString().split('\n').length - 1;
	callback();
});
}

function consolePrint()
{
	console.log(count);
}

reading(consolePrint);