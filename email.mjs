import { createTransport } from 'nodemailer';
import catchAsync from './catchAsync.mjs';

const sendEmail = catchAsync(async (options) => {
  

  const transporter = createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });


  const mailOptions = {
    from: 'Bastian Nguyen <hello@natour.io>',
    to: `${options.name} <${options.email}>`,
    subject: options.subject,
    text: options.message,
    
  };

  
  await transporter.sendMail(mailOptions);
});

export default sendEmail;
