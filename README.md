# Angular filter parse an URL

This module provides an `urlParser` filter for Angular. It converts an URL string
to an object with its components.

## Installation

    bower install --save angular-url-parser

## Parser

The parser uses the URL parser of the anchor (`<a>`) DOM element based on the
[gist](https://gist.github.com/jlong/2428561) from [jlong](https://github.com/jlong).

Following components are extracted:

- protocol
- username
- password
- hostname
- port
- host (hostname + port)
- pathname
- search
- hash

## Example

For given URL `http://john:s3cure@api.site.com:3000/users?page=2#user-4711` the `urlParser`
filter extracts:

    {
      protocol: 'http:',
      username: 'john',
      password: 's3cure',
      hostname: 'api.site.com',
      port: '3000',
      host: 'api.site.com:3000',
      pathname: '/users',
      search: '?page=2',
      hash: '#user-4711'
    }

Following example shows a simple `sitemap.xml` fetch service from an URL:

    angular.module('app', ['urlParser'])

      // Service to fetch the sitemap.xml of an web URL
      .factory('sitemapService', [
        '$http',
        'urlParserFilter',
        function ($http, urlParserFilter) {
          return {
            get: function(url) {
              var obj = urlParserFilter(url),
                  sitemapUrl;

              sitemapUrl = obj.protocol + '//' + obj.host + '/sitemap.xml';

              return $http.get(sitemapUrl);
            }
          };
        }
      ]);

## Test

Please install `karma-cli` and all dependencies via `npm install` and `bower install`.
Then run

    karma start

You might also set the `CHROME_BIN` environment variable.

## Contribute

- [Fork](https://github.com/xemle/angular-url-parser/fork) github repository
- Create a brunch
    - Fix a single bug
    - Write test
- Send push request

## Similar Projects

 - [URL.js](http://medialize.github.io/URI.js) - JS library to parse and set URLs

## Licence

MIT