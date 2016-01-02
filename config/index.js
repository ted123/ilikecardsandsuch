'use strict';

var baseURL      = 'https://graph.facebook.com/';
var pageId       = '1510219465940877';
var access_token = '?access_token=' + process.env.ACCESS_TOKEN;

module.exports = {
	'API' : {
		'getPageBasicInfo' : baseURL + pageId + access_token,
		'getPosts'         : baseURL + pageId + '/feed' + access_token
	}
};
