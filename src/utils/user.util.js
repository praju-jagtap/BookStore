/* eslint-disable prettier/prettier */
/* eslint-disable max-len */
/* eslint-disable prettier/prettier */
const nodemailer = require('nodemailer');
const { google } = require('googleapis');

const CLIENT_ID = '83856567376-k7533hrhtnf7368979dmjqoec7s64la6.apps.googleusercontent.com';
const CLEINT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//04MKYwdi-Y9xGCgYIARAAGAQSNwF-L9IrxuWeyxb0Aic2lAdre9WED4amDMbe7qF3t4lCL6t2F3wjaRVZM9g41zxjukhHG6bH_5w';

const oAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLEINT_SECRET,
    REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

export const sendMail = async (email) => {
    try {
        const accessToken = await oAuth2Client.getAccessToken();
        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'prajaktajagtap2412@gmail.com',
                clientId: CLIENT_ID,
                clientSecret: CLEINT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken,
            },
        });

        const mailOptions = {
            from: 'PRAJAKTAJAGTAP2412 <prajaktajagtap2412@gmail.com>',
            to: email,
            subject: 'Reset Password',
            text: 'Reset Password',
            html: '<h1>To Reset Your Password <a href="http://localhost:3000/api/v1/users/resetpassword"> Click Here </a></h1><h1>',
        };
        const result = await transport.sendMail(mailOptions);
        return result;
    } catch (error) {
        return error;
    }
}

/*sendMail()
    .then((result) => console.log('Email sent...', result))
    .catch((error) => console.log(error.message));
*/