'use strict';

describe('Filter: urlParser', function () {

  var filter;

  beforeEach(module('urlParser'));

  beforeEach(inject(function (urlParserFilter) {
    filter = urlParserFilter;
  }));

  it('should parse url', function () {
    expect(filter('http://john:s3cure@api.site.com:3000/users?page=2#user-4711')).toBeTruthy();
  });

  describe('result', function() {
    var obj;

    beforeEach(function() {
      obj = filter('http://john:s3cure@api.site.com:3000/users?page=2#user-4711');
    });

    it('should have protocoll', function () {
      expect(obj.protocol).toBe('http:');
    });

    it('should have username', function () {
      expect(obj.username).toBe('john');
    });

    it('should have password', function () {
      expect(obj.password).toBe('s3cure');
    });

    it('should have hostname', function () {
      expect(obj.hostname).toBe('api.site.com');
    });

    it('should have port', function () {
      expect(obj.port).toBe('3000');
    });

    it('should have host', function () {
      expect(obj.host).toBe('api.site.com:3000');
    });

    it('should have pathname', function () {
      expect(obj.pathname).toBe('/users');
    });

    it('should have search', function () {
      expect(obj.search).toBe('?page=2');
    });

    it('should have hash', function () {
      expect(obj.hash).toBe('#user-4711');
    });

  });
});

