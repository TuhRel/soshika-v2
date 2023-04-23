import nodemailer from 'nodemailer'

interface ContactForm {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  message: string;
  service: string;
}

export const sendEmail = async ({ email, firstName, lastName, phone, message, service }: ContactForm ) => {

  const transporter = nodemailer.createTransport({
  service: process.env.MAIL_SERVICE,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
  });

  const emailOutput = `
  <html>
    <head>
      <style>
        div {
          white-space: no-wrap;
        }
        h1 {
          font-size: 2rem;
          color: blue;
        }
        h2 {
          font-size: 1rem;
          color: black
        }
        p {
          color: black;
          font-size: 1rem;
        }
      </style>
    </head>
    <body>
      <h1>Contact Details</h1>
        <div><h2>Name:</h2> <p>${firstName} ${lastName}</p></div>
        <div><h2>Phone:</h2> <p>${phone}</p></div>
        <div><h2>Email:</h2> <p>${email}</p></div>
      <h1>Request Details</h1>
        <h2>Service:</h2> <p>${service}</p>
        <h2>Message:</h2> <p>${message}</p>
    </body>
  </html>
  `

  const customerMail = {
    from: `SoShika Photography - Shika Johnson <${process.env.EMAIL}>`,
    to: email,
    subject: 'Thank you for your request.',
    text: 'Your contact request to SoShika Photography has been received and someone will get back with you as soon as possible.',
    html: `<p>Your request contact request to SoShika Photography has been received and someone will get back with you as soon as possible.</p> ${emailOutput}`
  };

  const photographerMail = {
    from: `SoShika Photography Request <${process.env.EMAIL}>`,
    to: process.env.EMAIL,
    subject: 'SoShika Photography Contact Request',
    text: 'Details for contact request below:',
    html: `Hey Boss Lady, details for the contact request are below. ${emailOutput}`
  }

  try {
    await transporter.sendMail(customerMail)
    await transporter.sendMail(photographerMail)
  } catch (error) {
    console.error(error)
  }
}

export default sendEmail;