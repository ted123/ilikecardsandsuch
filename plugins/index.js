'use strict';
// some plugin dependencies
var Inert  = require( 'inert' );
var Vision = require( 'vision' );

module.exports = [
	Inert,
	Vision,
	{
		'register' : require( 'hapi-swagger' ),
		
		'options' : {
			'info' : {
				'title'   : 'Test API',
				'version' : 'v1'
			},
			
			'payloadType' : 'form'
		}
	}
];
