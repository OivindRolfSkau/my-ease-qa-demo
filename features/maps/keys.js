const deviceKeys = {
	'Enter': '[[Enter]]'
};

module.exports = deviceKey => {
	if (deviceKey in deviceKeys) {
		return deviceKeys[deviceKey];
	}

	throw new Error(`Unknown key requested: ${deviceKey}`);
};