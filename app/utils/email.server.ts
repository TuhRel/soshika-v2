import { json } from "@remix-run/node";
import { validateName, validateEmail, validatePhone } from "./validators.server";
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
    <h3>Contact Details</h3>
      <p>Name: ${firstName} ${lastName}</p>
      <p>Phone: ${phone}</p>
      <p>Email: ${email}</p>
    <h3>Request Details</h3>
      <p>Service: ${service}</p>
      <p>Message: ${message}</p>
  `

  const customerMail = {
    from: `SoShika Photography - Shika Johnson <${process.env.EMAIL}>`,
    to: email,
    subject: "Thank you for your request.",
    text: "Your request regarding the following details has been received and someone will get back to you within 48 hours.",
    html: emailOutput
  };

  const photographerMail = {
    from: `SoShika Photography Request <${process.env.EMAIL}>`,
    to: process.env.EMAIL,
    subject: 'SoShika Photography Contact Request',
    text: `Details for contact request below:`,
    html: emailOutput
  }

  try {
    await transporter.sendMail(customerMail)
    await transporter.sendMail(photographerMail)
  } catch (error) {
    console.error(error)
  }
}

export default sendEmail;