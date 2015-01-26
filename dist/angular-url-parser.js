angular.module('urlParser', [])
  // urlParser based on https://gist.github.com/jlong/2428561 by jlong
  .filter('urlParser', [
    '$document',
    function($document) {
      var fields = 'protocol,username,password,host,hostname,port,pathname,search,hash'.split(',');

      return function(input) {
        var parser = $document[0].createElement('a'),
            result = {};

        parser.href = input;

        fields.forEach(function (name) {
          result[name] = parser[name];
        });

        return result;
      };
    }
  ]);