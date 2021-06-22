const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");
// Models
const UserModel = require("../db/models/users");

module.exports = {
  signUpUser: (userData) => {
    return new Promise((resolve, reject) => {
      if (userData.password === userData.confirmPassword) {
        delete userData.confirmPassword;
        UserModel.findOne({ email: userData.email }).then(async (userExist) => {
          if (userExist) {
            resolve({ statusCode: 409 });
          } else {
            userData.password = await bcrypt.hash(userData.password, 10);
            userData.clientId = uuidv4();
            UserModel.create(userData)
              .then((doc) => {
                resolve({ statusCode: 201, userData: doc });
              })
              .catch((err) => {
                reject(err);
                console.log(err);
              });
          }
        });
      } else {
        resolve({ statusCode: 401 });
      }
    });
  },
  getUserData: (userId, clientId) => {
    return new Promise((resolve, reject) => {
      UserModel.findOne(
        { _id: userId, clientId },
        "createdAt -_id fullName email location clientId"
      )
        .then((userData) => {
          if (userData) {
            resolve({ userData, statusCode: 200 });
          } else {
            resolve({ statusCode: 404 });
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
