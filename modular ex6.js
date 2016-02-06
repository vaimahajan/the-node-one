var fs = require('fs');
var path = require('path');
//process.argv[]

var ext = '.' + process.argv[3];

module.exports = function (dir, filterString, callback)
{
	fs.readdir(process.argv[2], function doneRead(err, data){
		if(err)
			return callback(err);
		for (var i = 0 ; i<data.length; i++)
		{
			if(path.extname(data[i])==ext)
			{
				tempfile = data[i];
				callback();
			}
		}
	});
};