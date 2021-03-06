'use strict';

var _require = require('../middlewares/auth'),
    getFromRequest = _require.getFromRequest;

exports.authenticate = function (req, res, next) {

    console.log('validator');
    if (req.body.email === undefined) return res.status(422).json({ errorMessage: 'e-mail parameter is required' });
    if (req.body.password === undefined) return res.status(422).json({ errorMessage: 'password parameter is required' });

    next();
};

exports.refresh = function (req, res, next) {

    if (getFromRequest(req) === undefined) return res.status(422).json({ errorMessage: 'header x-access-token or token parameter is required' });
    if (req.body.refresh_token === undefined) return res.status(422).json({ errorMessage: 'refresh_token parameter is required' });

    next();
};

exports.requestPassword = function (req, res, next) {

    next();
};

exports.changePassword = function (req, res, next) {

    if (getFromRequest(req) === undefined) return res.status(422).json({ errorMessage: 'header x-access-token or token parameter is required' });
    if (req.body.token === undefined) return res.status(422).json({ errorMessage: 'token parameter is required' });
    if (req.body.password === undefined) return res.status(422).json({ errorMessage: 'password parameter is required' });
    if (req.body.new_password === undefined) return res.status(422).json({ errorMessage: 'new_password parameter is required' });

    next();
};
//# sourceMappingURL=auth.js.map