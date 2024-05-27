const nodeMailer = require('nodemailer');
const { text } = require('stream/consumers');

// transporter
const transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
        user: "ort99@gmail.com",
        pass: "#knjgnk23"
    }
})

// mail options
const mailOptions = {
    from: "ort99@gmail.com",
    to: "ort99@gmail.com",
    subject: "sending my email message using node.js",
    text: "this is my own generated email message from vs code"
}

// method for sending email
transporter.sendMail(mailOptions, function(err, info){
    if(err){
        return console.log('error received')
    }
    else{
        console.log('email sent:' + info.response)
    }
})
