var fs = require('fs');
var path = require('path');
//process.argv[]

var ext = '.' + process.argv[3];

function printConsole()
{
	console.log(tempfile);
}

function finder(callback)
{
	fs.readdir(process.argv[2], function doneRead(err, data){
		if(err)
			console.err(err);
		for (var i = 0 ; i<data.length; i++)
		{
			if(path.extname(data[i])==ext)
			{
				tempfile = data[i];
				callback();
			}
		}
		});
}

finder(printConsole);