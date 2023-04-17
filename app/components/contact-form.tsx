import { FormField } from "./form-field"
import { ActionFunction, json } from "@remix-run/node";
import { validateEmail, validateName } from "~/utils/validators.server";
import { useState } from "react";
import { useActionData } from "@remix-run/react";
import { createContact, sendContact } from "~/utils/contact.server";

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const action = form.get("_action")
  const email = form.get("email");
  let firstName = form.get("firstName");
  let lastName = form.get("lastName");
  let phone = form.get("phone")
  let message = form.get("message")
  let service = form.get("service")


  // If not all data was passed, error
  if (
    typeof action !== "string" ||
    typeof email !== "string" ||
    typeof firstName !== "string" ||
    typeof lastName !== "string" ||
    typeof phone !== "string" ||
    typeof message !== "string" ||
    typeof service !== "string"
  ) {
      return json({ error: `Invalid Form Data`, form: action }, { status: 400 });
  }

  // Validate name & email
  const errors = {
    firstName: validateName(firstName as string || ''),
    lastName: validateName(lastName as string || ''),
    email: validateEmail(email),
    phone: validateName(phone as string || ''),
    service: validateName(service as string || ''),
    message: validateName(message as string || ''),
  };

  //  If there were any errors, return them
  if (Object.values(errors).some(Boolean))
    return json({ errors, fields: { firstName, lastName, email, phone, service, message }, form: action }, { status: 400 });
  
  if (action === 'contact') {
    firstName = firstName as string
    lastName = lastName as string
    phone = phone as string
    service = service as string
    message = message as string
    return await sendContact({ firstName, lastName, email, phone, service, message })
  }

}

export default function ContactForm() {
  const actionData = useActionData()
  const [action] = useState('contact')
  const [errors, setErrors] = useState(actionData?.errors || {})
  const [formError, setFormError] = useState(actionData?.errer || '')
  const [formData, setFormData] = useState({
    firstName: actionData.fields.firstName || '',
    lastName: actionData.fields.firstName || '',
    email: actionData.fields.firstName || '',
    phone: actionData.fields.firstName || '',
    service: actionData.fields.firstName || '',
    message: actionData.fields.firstName || ''
})

    // Updates the form data when an input changes
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, field: string) => {
      setFormData(form => ({ ...form, [field]: event.target.value }))
    }

  return (
    <form method="POST" className="flex flex-col w-full justify-center items-center">
      <h1 className="text-2xl font-light tracking-widest text-center uppercase p-5">
        Let's Connect
      </h1>
      {formError}
      <div className="flex justify-center items-center w-full gap-3">
        <div className="flex flex-col w-full">
          <FormField
            htmlFor="firstName"
            label="First Name"
            value={formData.firstName}
            onChange={e => handleInputChange(e, 'firstName')}
            error={errors?.firstName} />
        </div>
        <div className="flex flex-col w-full">
        <FormField
          htmlFor="lastName"
          label="Last Name"
          value={formData.lastName}
          onChange={e => handleInputChange(e, 'lastName')}
          error={errors?.lastName} /> 
        </div>
      </div>
      <div className="flex justify-center items-center w-full">
        <div className="flex flex-col w-full">
          <FormField
            htmlFor="email"
            label="Email"
            value={formData.email}
            onChange={e => handleInputChange(e, 'email')}
            error={errors?.email} />
        </div>
      </div>
      <div className="flex justify-center items-center w-full">
        <div className="flex flex-col w-full">
          <FormField
            htmlFor="phone"
            label="Phone"
            value={formData.phone}
            onChange={e => handleInputChange(e, 'phone')} />
        </div>
      </div>
      <div className="flex justify-center items-center w-full">
        <div className="flex flex-col w-full">
          <FormField
            htmlFor="service"
            label="Service (i.e wedding, birthday, maternity, etc...)"
            value={formData.service}
            onChange={e => handleInputChange(e, 'service')} />
        </div>
      </div>
      <div className="flex justify-center items-center w-full">
        <div className="flex flex-col w-full">
          <FormField
            htmlFor="message"
            label="Message"
            value={formData.message}
            onChange={e => handleInputChange(e, 'message')} />
        </div>
      </div>
      <div className="flex justify-center items-center w-full p-2.5">
        <button
          type="submit"
          name="_action"
          value={action}
          className="border rounded border-solid border-blue-500 p-2.5 bg-blue-500 text-white hover:bg-blue-300">
          {
            action === 'contact' ? 'Contact' : 'Button'
          }
        </button>
      </div>
    </form>
  )
}