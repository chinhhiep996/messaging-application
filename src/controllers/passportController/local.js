import passport from 'passport';
import passportLocal from 'passport-local';

import UserModel from '../../models/user.model';
import {transErrors, transSuccess} from '../../../lang/vi';

const LocalStratery = passportLocal.Strategy;

/**
 * Valid user account type: local
 * */

const initPassportLocal = () => {
    passport.use(new LocalStratery({
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true,
    }, async (req, email, password, done) => {
        try {
            let user = await UserModel.findByEmail(email);
            if (!user) {
                return done(null, false, req.flash("errors", transErrors.login_failed));
            }
            if (!user.local.isActive) {
                return done(null, false, req.flash("errors", transErrors.account_not_active));
            }

            let checkPassword = await user.comparePassword(password);
            if (!checkPassword) {
                return done(null, false, req.flash("errors", transErrors.login_failed));
            }

            return done(null, user, req.flash("success", transSuccess.loginSuccess(user.username)));
        } catch (e) {
            console.log(e);
            return done(null, false, req.flash("success", transErrors.server_error));
        }
    }));

    //Set userId to session
    passport.serializeUser((user, done) => {
        done(null, user._id);
    });

    passport.deserializeUser((id, done) => {
        UserModel.findUserById(id)
            .then(user => {
                return done(null, user);
            })
            .catch(e => {
                return done(e, null);
            })
    });
};

module.exports = initPassportLocal;
