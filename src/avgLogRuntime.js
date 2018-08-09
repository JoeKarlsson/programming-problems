const fs = require('fs');

fs.readFile('./log.txt', (err, data) => {
  if (err) throw err;
	const logHash = {};
	logs = data.toString().split('\n');
	logs.pop();

	logs.map((log) => {
		const logData = log.split(' ');
		const timestamp = logData[0];
		const operation = logData[1];
		const status = logData[2];

		if (!logHash.hasOwnProperty(operation)) {
			logHash[operation] = {start: null, end: null};
		}
		if (status === 'start') {
			logHash[operation].start = timestamp;
		} else {
			logHash[operation].end = timestamp;
		}
		return logHash[operation]
	});
	var arr = Object.keys(logHash).map(function (key) { return logHash[key]; });
	console.log('arr', arr);



	const avgTime = arr.reduce((prev, log) => {
		console.log('log.end.getTime()', log.end.getSeconds());
		return (log.end - log.start)
	}, 0);

	console.log('avgTime', avgTime);

});
