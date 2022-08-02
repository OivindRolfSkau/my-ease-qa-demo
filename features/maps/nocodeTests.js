const nocodeTests = {
	'Home page opened': 'fabc62f1-e75d-4ced-93c8-eea4c9c73805',
};

module.exports = testName => {
	if (testName in nocodeTests) {
		return nocodeTests[testName];
	}

	throw new Error(`Unknown test requested: ${testName}`);
};
