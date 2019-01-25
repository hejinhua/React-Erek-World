var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')

var app = express()
var routes = require('./routes')

var whitelist = ['http://localhost:3000', 'http://localhost:3001']

var corsOptions = {
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      //   callback(new Error('Not allows by CORS'))
      callback(null, true)
    }
  }
}

// 中间件
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

app.use(bodyParser.json())
app.use(
  cors({
    credentials: true
  })
)
app.options('*', cors())

app.use('/', cors(corsOptions))
routes(app)

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type') // 预检请求使用
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS') // 预检请求使用
  next()
})

// 设置端口
app.set('port', process.env.PORT || 3001)

app.listen(app.get('port'), function() {
  console.log('Express server is running at : ' + app.get('port'))
})
