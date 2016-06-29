var superagent = require('superagent')
var prettyjson = require('prettyjson')

function handler(err, res) {
  if (err) console.log(err);
  else console.log(prettyjson.render(res.body));
}

module.exports = {
  create: function (data) {
    superagent
      .post('http://127.0.0.1:8080/')
      .send(data)
      .set('Accept', 'application/json')
      .end(handler)
  },
  find: function (query) {
    superagent
      .get('http://127.0.0.1:8080/' + query)
      .set('Accept', 'application/json')
      .end(handler)
  }
}
