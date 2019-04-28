var passport =require('passport')
var BasicStrategy = require('passport-http')
.BasicStrategy;
var users =require('./userdata/users');

passport.use(new BasicStrategy(function (username, 
password,done) {
    var user = users.checkCredentials(username,
    password);
    if(user)    return done(null, true);
    else        return done(null, false);


}));

exports.auth = passport.authenticate('basic', {
session: false});