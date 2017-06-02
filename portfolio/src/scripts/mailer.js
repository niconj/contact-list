const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: 'nicolasjeremiasportfolio@hotmail.com',
        pass: 'cocomiel1'
    }
});

console.log("mailer creado");

let mailOptions = {
    from: '"Tu portfolio" <nicolasjeremiasportfolio@hotmail.com>',
    to: 'jeremias.nicolas@gmail.com',
    subject: 'New message!',
    text: 'hola amego',
    html: '<b>hola amegoooo</b>'
};

function sendMail() {
    debugger;
    transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
});
}

var myMailer = (function() {
        console.log("mailer invokado");
});