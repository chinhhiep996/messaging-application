import nodemailer from 'nodemailer';

const adminEmail = process.env.MAIL_USER;
const adminPassword = process.env.MAIL_PASSWORD;
const mailHost = process.env.MAIL_HOST;
const mailPort = process.env.MAIL_POST;

const sendMail = (to, subject, htmlContent) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'chatappofhiep@gmail.com', // generated ethereal user
            pass: 'a123456789*0' // generated ethereal password
        }
    });
    const options = {
        from: 'chatappofhiep@gmail.com', // sender address
        to: to, // list of receivers
        subject: subject, // Subject line
        html: htmlContent // html body
    };

    return transporter.sendMail(options); // return promise
}

module.exports = sendMail;
