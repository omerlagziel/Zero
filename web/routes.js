var mongoose = require('mongoose');
var _ = require('lodash');
var UserManager = require('./modules/user-manager');

mongoose.connect(process.env.MONGODB_URI, {
    useMongoUser: true
});

mongoose.Promise = global.Promise;
var db = mongoose.connection;

module.exports = function(app) {

  process.on('SIGINT', function (pid) {
  });

  app.post('/api/auth/login', (req, res) => {
    UserManager.login({ phoneNumber: req.body.phoneNumber, password: req.body.password },
      function(error, result) {
        if (!result) {
          res.status(400).send(error);
          return console.error(error);
        } else {
          // res.cookie('token', result.token, { maxAge: 90 }); // needed?
          res.status(200);
          res.json({ token: result.token });
          console.log(result.token);
        }
      }
    );
  });


  app.post('/api/auth/register', (req, res) => {
    const { password, phoneNumber } = req.body;

    UserManager.register({ password, phoneNumber }, function(error, result) {
      if (error) {
        res.status(400).send(error);
        return console.error(error);
      }	else {
        res.status(200); //.send({ token: result.token });
        res.json({ token: result.token });
      }
    });
  });
}
