'use strict';

var Joi   = require('Joi');
var APIv1 = require( '../handlers/v1/fb-handler.js' );

module.exports = [
	{
		'path'    : '/getPageBasicInfo',
		'method'  : 'GET',
		'handler' : APIv1.getPageBasicInfo,
		
		'config' : {
			'description' : 'Get page basic info',
			'tags'        : [ 'page', 'basic', 'info' ]
		}
	},
	{
		'path'    : '/getPosts',
		'method'  : 'GET',
		'handler' : APIv1.getPosts,

		'config' : {
			'description' : 'Get all page posts',
			'tags'        : [ 'posts' ]
		}
	}
];
