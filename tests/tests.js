
sink('qmark', function (test, ok) {

  test('should parse query parameter', 2, function () {
    window.history.pushState("test-state-1", "Tests", "/tests/tests.html?name=qmark&id=123")
    ok(qmark('name') == 'qmark', 'parses first param')
    ok(qmark('id') == '123', 'parses second param')
  })

  test('should parse query parameter for /!#/ routes', function () {
    window.history.pushState("test-state-2", "Tests", "/#!/blah?foo=bar&bar=foo")
    ok(qmark('foo') == 'bar', 'parses first param')
    ok(qmark('bar') == 'food', 'parses second param')
  })

  test('should give back an object', 2, function () {
    window.history.pushState("test-state-1", "Tests", "/tests/tests.html?name=qmark&id=123")
    var queryObj = qmark();
    ok(queryObj['name'] == 'qmark', 'parses first param')
    ok(queryObj['id'] == '123', 'parses second param')
  })

  test('should handle no query string case gracefully', 1, function () {
    window.history.pushState("test-state-3", "More Tests", "/tests/tests.html")
    ok(qmark('name') == undefined, 'handles non-existant params')
  })
})

start()
