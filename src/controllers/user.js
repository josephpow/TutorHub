const passport = require('passport');
const chalk = require('chalk');

const { User } = require('../models/User');

const getLogin = (req, res) => {
    res.render('login', { title: 'Login' });
};

const postLogin = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) return next(err);
        if (!user) {
            console.log(chalk.red('INCORRECT INFO'));
            return res.redirect('/login');
        }
        req.logIn(user, (err) => {
            if (err) return next(err);
            console.log(chalk.green('LOGGED IN'));
            res.redirect('/');
        });
    })(req, res, next);
};

const getSignup = (req, res) => {
    res.render('signup', { title: 'Signup' });
};

const postSignup = async (req, res, next) => {
    const user = new User({
        email: req.body.email,
        password: req.body.password,
    });
    try {
        await user.save();
        console.log('Successfully registered!'); // TODO: Delete later
        return res.status(201).redirect('login');
    } catch (err) {
        if (err.code === 11000) {
            console.error(chalk.red('Email in use')); // TODO: Replace with flash message
            return res.status(400).redirect('signup');
        }
        return next(err);
    }
};

module.exports = { getLogin, postLogin, getSignup, postSignup };
