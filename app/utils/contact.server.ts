import type { ContactForm } from "./types.server";
import { prisma } from "./prisma.server";
import { json } from "@remix-run/node";

export const createContact = async (contact: ContactForm) => {
  try {
    const newContact = await prisma.contact.create({
      data: {
        firstName: contact.firstName,
        lastName: contact.lastName,
        email: contact.email,
        phone: contact.phone,
        service: contact.service,
        message: contact.message
      }
    })
    // console.log('new contact:', newContact)
  }
  catch (error) {
    console.log('error creating contact', error)
  }
}

export async function sendContact(contact: ContactForm) {
  try {
    const newContact = await createContact(contact)
  } catch (error) {
    console.log('error creating customer', error)
  }
  return contact
}

// export const verifyContact = async (contact: ContactForm) => {
//   const newContact = await sendContact(contact)
//   if (!newContact) {
//     return json(
//       {
//       error: `Something went wrong trying to send the contact request.`,
//       fields: { email: contact.email, phone: contact.phone },
//       },
//       {status: 400}
//     )
//   }
//   return null
// }