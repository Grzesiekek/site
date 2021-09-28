const http = require('http')
const fs = require("fs")

const conf = require("./config.json")

http.createServer(function (req, res) {
    fs.readFile(__dirname + "/www" + req.url, function (err,data) {
      if (err) {
        res.writeHead(404);
        res.end(JSON.stringify(err));
        return;
      }
      res.writeHead(200);
      res.end(data);
    });
}).listen(conf.port);