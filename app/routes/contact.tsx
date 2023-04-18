import { useEffect, useRef, useState } from "react";
import { FormField } from "~/components/form-field";
import { Layout } from "~/components/layout";
import { ActionFunction, json } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import { validateEmail, validateName, validatePhone } from "~/utils/validators.server";
import { sendContact } from "~/utils/contact.server";
import image from "~/images/contactPage/contact-form-img.jpg"

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const action = form.get("_action")
  let email = form.get("email");
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
    phone: validatePhone(phone as string || ''),
    service: validateName(service as string || ''),
    message: validateName(message as string || ''),
  };

  //  If there were any errors, return them
  if (Object.values(errors).some(Boolean))
    return json({ errors, fields: { firstName, lastName, email, phone, service, message }, form: action }, { status: 400 });
  
  switch (action) {
    case 'contact': {
      firstName = firstName as string
      lastName = lastName as string
      email = email as string
      phone = phone as string
      service = service as string
      message = message as string
      return await sendContact({ email, firstName, lastName, phone, message, service })
    }
    default: 
      return json({error: 'Invalid Form Data'}, {status: 400})
  }
}

export default function Contact() {
  const actionData = useActionData()
  const firstLoad = useRef(true)
  const [action] = useState('contact')
  const [uploadSuccess, setUploadSuccess] = useState(false)
  const [errors, setErrors] = useState(actionData?.errors || {})
  const [formError, setFormError] = useState(actionData?.error || '')
  const [formData, setFormData] = useState({
    firstName: actionData?.fields?.firstName || '',
    lastName: actionData?.fields?.lastName || '',
    email: actionData?.fields?.email || '',
    phone: actionData?.fields?.phone || '',
    service: actionData?.fields?.service || '',
    message: actionData?.fields?.message || ''
  })

  const toggleUploadSuccess = () => {
    if (!uploadSuccess)
      setUploadSuccess(true)
  }

  // Updates the form data when an input changes
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, field: string) => {
    setFormData(form => ({ ...form, [field]: event.target.value }))
  }
  
  // useEffect(() => {
  //   // Clear the form if we switch forms
  //   if (!firstLoad.current) {
  //       const newState = {
  //         email: '',
  //         firstName: '',
  //         lastName: '',
  //         phone: '',
  //         message: '',
  //         service: ''
  //       }
  //       setErrors(newState)
  //       setFormError('')
  //       setFormData(newState)
  //   }
  // }, [action])

  useEffect(() => {
      if (!firstLoad.current) {
          setFormError('')
      }
  }, [formData])

  useEffect(() => {
      // We don't want to reset errors on page load because we want to see them
      firstLoad.current = false
  }, [])

  return (
    <Layout>
      <div className="flex flex-col w-full h-full justify-center items-center bg-slate-100">
        <div className="grid grid-cols-2 gap-5 w-full h-full mt-20">
          <div className="flex flex-col w-full justify-center items-center bg-[url('~/images/contactPage/contact-form-img.jpg')] bg-cover">
            {/* <img src={image} alt="alt" /> */}
          </div>
          <div className="flex flex-col w-full justify-center items-center object-cover overflow-hidden">
            <form onSubmit={() => setUploadSuccess(true)} action='/contact' method="POST" className="flex flex-col w-full justify-center items-center p-5">
              <h1 className="text-2xl font-light tracking-widest text-center uppercase p-5">
                Let's Connect
              </h1>
              {formError}
              <div className="flex justify-center items-center w-full gap-3">
                <div className="flex flex-col w-full py-2.5">
                  <FormField
                    htmlFor="firstName"
                    label="First Name"
                    value={formData.firstName}
                    onChange={e => handleInputChange(e, 'firstName')}
                    error={errors?.firstName} />
                </div>
                <div className="flex flex-col w-full py-2.5">
                <FormField
                  htmlFor="lastName"
                  label="Last Name"
                  value={formData.lastName}
                  onChange={e => handleInputChange(e, 'lastName')}
                  error={errors?.lastName} /> 
                </div>
              </div>
              <div className="flex justify-center items-center w-full">
                <div className="flex flex-col w-full py-2.5">
                  <FormField
                    htmlFor="email"
                    label="Email"
                    value={formData.email}
                    onChange={e => handleInputChange(e, 'email')}
                    error={errors?.email} />
                </div>
              </div>
              <div className="flex justify-center items-center w-full">
                <div className="flex flex-col w-full py-2.5">
                  <FormField
                    htmlFor="phone"
                    label="Phone"
                    value={formData.phone}
                    onChange={e => handleInputChange(e, 'phone')}
                    error={errors?.phone} />
                </div>
              </div>
              <div className="flex justify-center items-center w-full">
                <div className="flex flex-col w-full py-2.5">
                  <FormField
                    htmlFor="service"
                    label="Service (i.e wedding, birthday, maternity, etc...)"
                    value={formData.service}
                    onChange={e => handleInputChange(e, 'service')}
                    error={errors?.service} />
                </div>
              </div>
              <div className="flex justify-center items-center w-full">
                <div className="flex flex-col w-full py-2.5">
                  <FormField
                    htmlFor="message"
                    label="Message"
                    value={formData.message}
                    onChange={e => handleInputChange(e, 'message')}
                    error={errors?.message} />
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
            {uploadSuccess && <div>Form submitted successfully!</div>}
          </div>
        </div>
      </div>
    </Layout>
  )
}