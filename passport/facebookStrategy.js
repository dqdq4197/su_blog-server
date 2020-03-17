const FacebookStrategy = require('passport-facebook').Strategy;
const { User } = require('../models');

module.exports = (passport) => {
    passport.use(new FacebookStrategy({
        clientID: process.env.FACEBOOK_ID,
        clientSecret: process.env.FACEBOOK_SECRET_CODE,
        callbackURL: "https://localhost:3000/auth/facebook/callback",
        passReqToCallback: true,
        profileFields: ['id', 'displayName', 'photos', 'email']
      },async (req,accessToken, refreshToken, profile, done) => {
          try {
              const exUser = await User.findOne({where:{ snsId : profile.id, provider: 'facebook'}});
              if(exUser) {
                  done(null, exUser);
              } else {
                const newUser = await User.create({
                      email: profile.id,
                      provider:'facebook',
                      nick:profile.displayName+profile.id.slice(3,4),
                      snsId:profile.id,
                      verify:1,
                      profile_img:profile._json.picture.data || 'basic.gif'
                  });
                  done(null, newUser);
              }
          } catch (error) {
              console.error(error);
              done(error);
          }
        }
    ))
};