const exppress = require('express'),
      app = express()
      session = require('express-session'),
      path = require('path');

app.use(session({secret: 'why not zoidberg'}))

app.get('/', function index(req,res){
  res.sendFile(path.resolve(_dirname, 'views', 'index.html'))
})

app.listen(process.env.PORT || 8080)
