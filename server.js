const next = require('next');// using next routes
const routes = require('./routes');
const app = next({dev: process.env.NODE_ENV !== 'production'});
const handler = routes.getRequestHandler(app);
const {createServer} = require('http')
const port = process.env.PORT || 3000;

app.prepare().then(() => {
  createServer(handler).listen(port,err=>{
    if(err) throw err;
    console.log("Ready to host...");
  });
});
