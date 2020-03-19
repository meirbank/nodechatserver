#!/usr/bin/env node
var debug = require('debug')('chat');
var app = require('./express.js');
var http = require("http")

app.set('port', process.env.PORT);


var server = http.createServer(app);
server.listen(process.env.PORT);
server.on('error', onError);
server.on('listening', onListening);

require('./routes/index.js')(server);









function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {


  console.log('Listening');
}

/*
var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});*/




