var mongoose = require('mongoose');
var functions = require('../functions');
var User = require('../models/user');

var UserManager = {};

UserManager.login = (data, callback) => {
	let { phoneNumber, password, error } = functions.validateLogin({
		phoneNumber: data.phoneNumber,
		password: data.password
	});

	// error = 'general/invalid-data'
	if (error) {
		callback({ code: error });
		return console.error(error);
	}

	User.findOne({ phone_number: phoneNumber }, (error, user) => {
    // No such phone number in the database
		if (user === null) {
			callback({ code: 'auth/no-match' });
      return console.error('No such phone number in the database', error);
		}

		functions.verifyPassword(password, user.password, (error2, isPasswordCorrect) => {
			if (error2) {
				callback({ code: 'general/technical-failure' });
        return console.error('technical-failure: Hash', error2);
			}
      if (!isPasswordCorrect) {
        callback({ code: 'auth/no-match' });
        return console.error('auth/no-match - Password is not correct');
      }

      var token = functions.createJWT(user);
			callback(null, { token });
		});
	});
};


UserManager.getUserById = (id, callback) => {
	User.findById(id, (error, user) => {
		if (user === null) {
			callback({ code: 'user/not-found' });
      return console.error('No such user in the database', error);
		}

		callback(null, user);
	});
};


UserManager.getTokenByUserId = (id, callback) => {
	User.findById(id, (error, user) => {
		if (user === null) {
			callback({ code: 'user/not-found' });
      return console.error('No such user in the database', error);
		}

    var token = functions.createJWT(user);
		callback(null, { token });
	});
};

UserManager.register = function(newData, callback) {
  let { phoneNumber, password, name, error } = functions.validateRegister({
    phoneNumber: newData.phoneNumber,
    password: newData.password,
  });

  // Invalid data
  if (error) {
    callback({ code: error });
    return;
  }

	console.log('User.findOne..', phoneNumber);
	User.findOne({ phone_number: phoneNumber }, function(findError, result) {
		if (result) {
			callback({ code: 'auth/phone-taken' });
      return console.error('auth/phone-taken', findError);
    }

		console.log('functions.saltAndHash..');
		functions.saltAndHash(password, function(hashError, hash) {
      if (hashError) {
        callback({ code: 'general/technical-failure' });
        return console.error('general/technical-failure', hashError);
      }

			var newUser = new User({
        phone_number: phoneNumber,
        password: hash
      });

			console.log('newUser.save..');
      // Insert newUser to DB
      newUser.save((saveError) => {
        if (saveError) {
          callback({ code: 'general/technical-failure' });
          return console.error('general/technical-failure', saveError);
        }

        User.findOne({ phone_number: phoneNumber }, function(newFindError, result) {
      		if (!result) {
            callback({ code: 'general/technical-failure' });
            return console.error('general/technical-failure', newFindError);
          }

          var token = functions.createJWT(result);
          callback(null, { token });
        });
      });
		});
	});
}

UserManager.reduceSMSLimitBy = function(num, user, callback) {
	User.findByIdAndUpdate(user._id, { sms_limit: user.sms_limit - num }, (err, res) => {
		if (err) {
			callback({ code: 'general/technical-failure' });
			return console.error('general/technical-failure', err);
		}

		callback(null, res);
	});
};

module.exports = UserManager;
