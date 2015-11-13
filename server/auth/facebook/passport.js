var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

exports.setup = function (User, config) {
  passport.use(new FacebookStrategy({
      clientID: config.facebook.clientID,
      clientSecret: config.facebook.clientSecret,
      callbackURL: config.facebook.callbackURL
    },
    function(accessToken, refreshToken, profile, done) {
      User.findOne({
        'facebook.id': profile.id
      },
      function(err, facebookUser) {
        if (err) {
          return done(err);
        }
        if (!facebookUser) {
          User.findOne({'email': profile.emails[0].value}, function(err, user){
            if(!user){
              //if the user doesnt have a facebook OR a local account, create a new account
              facebookUser = new User({
                name: profile.displayName,
                email: profile.emails[0].value,
                role: 'user',
                username: profile.username,
                provider: 'facebook',
                facebook: profile._json
              });
              facebookUser.save(function(err) {
                if (err) return done(err);
                done(err, facebookUser);
              });
            }
            else{
              //if the user already has a local profile, update it with the facebook data
              user.facebook = profile._json;
              user.save(function(err){
                if (err) return done(err);
                done(err, facebookUser);
              })
            }
          })
        } else {
          return done(err, facebookUser);
        }
      })
    }
  ));
};
