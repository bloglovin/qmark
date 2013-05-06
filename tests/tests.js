
sink('qmark', function (test, ok) {

  test('should parse query parameter', 2, function () {
    window.history.pushState("test-state-1", "Tests", "/tests/tests.html?name=qmark&id=123")
    ok(qmark('name') == 'qmark', 'parses first param')
    ok(qmark('id') == '123', 'parses second param')
  })

  test('should handle no query string case gracefully', 1, function () {
    window.history.pushState("test-state-2", "More Tests", "/tests/tests.html")
    ok(qmark('name') == undefined, 'handles non-existant params')
  })
})

start()
