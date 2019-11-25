const transporter = require('./transport');

module.exports.sendEmail = async (email, confirmationCode) => {

    let info = await transporter
        .sendMail({
            from: process.env.MAIL_EMAIL,
            to: email,
            subject: 'Hello ✔ ',
            text: `Hello world activation code: ${confirmationCode}`

        })
        .then((result) => {
            console.log(result);
        })
        .catch((err) => {
            console.log(err);
        });

};