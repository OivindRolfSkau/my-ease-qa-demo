const {Given, When, Then} = require('cucumber');
const suitest = require('suitest-js-api');
const {assert} = suitest;
const getElement = require('../maps/elements');
const getKey = require('../maps/keys');
const getTestId = require('../maps/nocodeTests');
const nodeAssert = require('assert');
const DEFAULT_TIMEOUT = 5000;

Given('application is open', async () => {
	await assert.openApp();
	await assert.runTest(getTestId('Home page opened'));
});

When('user presses {string}', async key => {
    await suitest.window()
    .sendText(getKey(key));
});

Then('user sees {string}', async element => {
	await assert.element(getElement(element)).exists().timeout(DEFAULT_TIMEOUT);
});