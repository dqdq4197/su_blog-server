const FacebookStrategy = require('passport-facebook').Strategy;
const { User } = require('../models');

module.exports = (passport) => {
    passport.use(new FacebookStrategy({
        clientID: process.env.FACEBOOK_ID,
        clientSecret: process.env.FACEBOOK_SECRET_CODE,
        callbackURL: process.env.NODE_ENV==='production' ? 
        "https://api.sublog.co/auth/facebook/callback" :
        "https://localhost:3000/auth/facebook/callback",
        passReqToCallback: true,
        profileFields: ['id', 'displayName', 'photos', 'email']
      },async (req,accessToken, refreshToken, profile, done) => {
          try {
              const exUser = await User.findOne({where:{ snsId : profile.id, provider: 'facebook'}});
              if(exUser) {
                  done(null, exUser);
              } else {
                const picture = `https://graph.facebook.com/${profile.id}/picture?width=200&height=200&access_token=${accessToken}`
                const newUser = await User.create({
                      email: profile.id,
                      provider:'facebook',
                      nick:profile.displayName+profile.id.toString().slice(3,5),
                      snsId:profile.id,
                      verify:1,
                      profile_img:picture || 'basic.gif'
                        //   profile_img:profile._json.picture.data.url || 'basic.gif'
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