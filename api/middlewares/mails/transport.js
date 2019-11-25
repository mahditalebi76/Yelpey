const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    // host: 'gmail',
    service: 'gmail',
    secure: false,
    auth: {

        user: process.env.MAIL_EMAIL,
        pass: process.env.MAIL_PASSWORD

    },
    tls: {
        rejectUnauthorized: false
    }
});

module.exports = transporter