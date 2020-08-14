const assert = require('chai').assert;
//const app = require('../app');
const sayGary = require('../app').sayGary;
const addNumbers = require('../app').addNumbers;
describe('App', function(){
	it('app should return gary', function(){
		assert.equal(sayGary(), 'gary');
	});

		it('app should return type string', function(){
		assert.typeOf(sayGary(), 'string');
	});

		it('addNumbers shoud be above 5', function(){
		assert.isAbove(addNumbers(5,5), 5);
	});

		it('app should return type number', function(){
		assert.typeOf(addNumbers(5,5), 'number');
	});

});