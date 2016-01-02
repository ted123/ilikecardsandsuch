'use strict';

var Request = require( 'request' );
var Boom    = require( 'boom' );

var API = require( '../../config' ).API;

var fbHandler = {
	'getPageBasicInfo' : function ( request, reply ) {
		Request( API.getPageBasicInfo, function ( err, res, body ) {
			reply( body );
		} );
	},

	'getPosts' : function ( request, reply ) {
		Request( API.getPosts, function ( err, res, body ) {
			reply( body );
		} );
	}
};

module.exports = fbHandler;
