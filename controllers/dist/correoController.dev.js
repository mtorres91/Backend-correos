"use strict";

var _require = require('express'),
    request = _require.request;

var nodeMailer = require('nodemailer');

require('dotenv').config();

var envioCorreo = function envioCorreo() {
  var req = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : request;
  var resp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : response;
  var body = req.body;
  var config = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    post: 587,
    auth: {
      user: 'teatendemosorpotunidad@gmail.com',
      pass: 'nvzvwapckiqzljgg'
    }
  });
  var opciones = {
    from: 'Programacion',
    subject: body.asunto,
    to: body.email,
    html: body.mensaje
  };
  config.sendMail(opciones, function (error, result) {
    if (error) return resp.json({
      ok: false,
      msg: error
    });
    return resp.json({
      ok: true,
      msg: result
    });
  });
};

module.exports = {
  envioCorreo: envioCorreo
};