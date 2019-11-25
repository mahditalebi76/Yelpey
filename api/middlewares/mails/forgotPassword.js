const transporter = require('./transport');
const bcrypt = require('bcryptjs');

module.exports.sendEmail = async (email, forgotPasswordCode) => {
    let info = await transporter
        .sendMail({
            from: process.env.MAIL_EMAIL,
            to: email,
            subject: 'Yelpey forgot password ',
            text: `hello,
please use this code to change your password using the link below :  ${forgotPasswordCode}`
        })
        .then((result) => {
            console.log(result);
        })
        .catch((err) => {
            console.log(err);
        });

};