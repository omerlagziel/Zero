var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var validator = require('validator');
var moment = require('moment');
var _ = require('lodash');

const secretKey = process.env.SECRET_KEY;
const saltRounds = 10;


var functions = {};

functions.isPhoneValid = (phone_number) => {
  const isValid = phone_number && phone_number.length === 10;
  return isValid;
}

functions.isPasswordValid = (password) => {
  const isValid = password && validator.isLength(password, { min: 6, max: 1000 });
  return isValid;
}

functions.isNameValid = (name) => {
  const isValid = name && validator.isLength(name, { min: 2, max: 50 });
  return isValid;
}

functions.isTitleValid = (name) => {
  const isValid = name && validator.isLength(name, { min: 1, max: 100 });
  return isValid;
}

functions.isDescriptionValid = (description) => {
  const isValid = description && validator.isLength(description, { min: 1, max: 1000 });
  return isValid;
}

functions.isPriorityValid = (description) => {
  const isValid = description === 'low' || description === 'medium' || description === 'high';
  return isValid;
}

functions.isDateValid = (date) => {
  const isValid = date && moment(date).isValid();
  return isValid;
}

functions.escape = (value) => {
  return validator.escape(value);
}


// TODO: Hook this to pre('validate') instead.
functions.validateTask = (data) => {
  const newData = {};
  newData.phoneNumber = functions.stripPhoneNumber(data.phoneNumber);

  if (!functions.isPhoneValid(data.phoneNumber) || !functions.isDateValid(data.dueDate)
    || !functions.isPriorityValid(data.priority) || !functions.isDescriptionValid(data.description)) {
    newData.error = 'general/invalid-data';
  } else {
    _.each(data, (value, key) => {
      newData[key] = validator.escape(value);
    });
  }

  return newData;
};

functions.validateRegister = (data) => {
  const newData = {};
  newData.phoneNumber = functions.stripPhoneNumber(data.phoneNumber);
  if (!functions.isPhoneValid(data.phoneNumber) || !functions.isPasswordValid(data.password)) {
    newData.error = 'general/invalid-data';
  } else {
    _.each(data, (value, key) => {
      newData[key] = validator.escape(value);
    });
  }

  return newData;
};

functions.validateLogin = (data) => {
  const newData = {};
  newData.phoneNumber = functions.stripPhoneNumber(data.phoneNumber);

  if (!functions.isPhoneValid(data.phoneNumber) || !functions.isPasswordValid(data.password)) {
    newData.error = 'general/invalid-data';
  } else {
    _.each(data, (value, key) => {
      newData[key] = validator.escape(value);
    });
  }

  return newData;
};

functions.stripPhoneNumber = (phoneNumber) => {
  if (!phoneNumber) return phoneNumber;
  let number = phoneNumber.match(/\d/g);
  number = number.join('');
  return number;
}

functions.createJWT = ({ _id, phone_number, name, admin, creation_date, banned, sms_limit }) => {
  var claims = {
    _id,
    phone_number,
    name,
    admin,
    creation_date,
    banned,
    sms_limit,
    exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 90), // 60 sec >> 60 minutes >> 24 hours >> 90 days //60 * 60 * 24 * 90
    iss: 'https://eventimapp.herokuapp.com/'
  }

  var token = jwt.sign(claims, secretKey);
  return token;
};

functions.verifyJWT = (token, callback) => {
  jwt.verify(token, secretKey, function(err, decoded) {
      if (err) {
          callback({ code: 'auth/invalid-token', status: 401 });
          return console.error('error decoding token', err);
      }

      callback(null, decoded);
  });
}

functions.verifyPassword = (plainPassword, hashedPassword, callback) => {
  // Compare plain pass to hashed pass (the function hashes the first password and compares it to the already hashed password)
  bcrypt.compare(plainPassword, hashedPassword, function (err, res) {
    var isValid = false;
    if (res) {
        isValid = true;
    }

    callback(err, isValid);
  });
};

functions.saltAndHash = (password, callback) => {
  bcrypt.genSalt(saltRounds, function (error, salt) {
    if (error) {
      callback(error);
    } else {
      bcrypt.hash(password, salt, function (error2, hash) {
        if (error2) {
          callback(error2);
        } else {
          callback(null, hash);
        }
      });
    }
  });
}

module.exports = functions;
