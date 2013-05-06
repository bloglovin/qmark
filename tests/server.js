var static = require('node-static')
  , file = new(static.Server)('../qmark')

require('http').createServer(function (req, res) {
  req.addListener('end', function () {
    file.serve(req, res)
  })
}).listen(8080)