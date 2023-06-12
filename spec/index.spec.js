'use strict'
const context = require('aws-lambda-mock-context');
const { handler } = require('../src/index'); //メインのスクリプトファイル
const event = require('./event_data'); //作成したパラメータファイル


describe('handler()', () => {
  describe('return str is valid', () => {
    test ('return test', async () => {
        const response = await handler(event, context);
        expect(response).toEqual("value1");
    });
  });
});
