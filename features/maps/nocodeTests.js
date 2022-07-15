const nocodeTests = {
	'Home page opened': '<test id>',
};

module.exports = testName => {
	if (testName in nocodeTests) {
		return nocodeTests[testName];
	}

	throw new Error(`Unknown test requested: ${testName}`);
};
