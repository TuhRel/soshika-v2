import { Layout } from "~/components/layout";
import { FormField } from "~/components/form-field";
import { useEffect, useRef, useState } from "react";
import { ActionFunction, LoaderFunction, json, redirect } from "@remix-run/node";
import { validateEmail, validateName, validatePassword } from "~/utils/validators.server";
import { login, register } from "~/utils/auth.server";
import { useActionData } from "@remix-run/react";
import { getUser } from "~/utils/auth.server";

export const loader: LoaderFunction = async ({ request }) => {
  return await getUser(request) ? redirect('/') : null
}

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData()
  const action = form.get('_action')
  const email = form.get('email')
  const password = form.get('password')
  let username = form.get('username')
  let firstName = form.get('firstName')
  let lastName = form.get('lastName')

  if (
    typeof action !== 'string' ||
    typeof email !== 'string' ||
    typeof password !== 'string'
  ) {
    return json(
      {
        error: 'Invalid Form Data',
        form: action
      },
      {
        status: 400
      }
    )
  }

  if (
    action === 'register' && (
      typeof firstName !== 'string' ||
      typeof lastName !== 'string' ||
      typeof username !== 'string' 
    )
  ) {
    return json(
      {
        error: 'Invalid Form Data',
        form: action
      },
      {
        status: 400
      }
    )
  }

  const errors = {
    email: validateEmail(email),
    password: validatePassword(password),
    ...(action === 'register' ? {
      firstName: validateName(firstName as string || ''),
      lastName: validateName(lastName as string || ''),
      username: validateName(username as string || '')
    } : {})
  }

  if (Object.values(errors).some(Boolean)) {
    return json(
      {
        errors, 
        fields: {
          email, 
          password, 
          username,
          firstName, 
          lastName
        },
        form: action
      },
      {
        status: 400
      }
    )
  }

  switch (action) {
    case 'login': {
      return await login({ email, password })
    }
    case 'register': {
      firstName = firstName as string
      lastName = lastName as string
      username = username as string
      return await register({ email, password, username, firstName, lastName })
    }
    default:
      return json(
        {
          error: 'Invalid Form Data'
        },
        {
          status: 400
        }
      )
  }
}

export default function Login() {
  const actionData = useActionData()
  const [ formError, setFormError ] = useState(actionData?.error || '')
  const [ errors, setErrors ] = useState(actionData?.errors || {})
  const [ action, setAction ] = useState('login')
  const firstLoad = useRef(true)
  const [ formData, setFormData ] = useState({
    email: actionData?.fields?.email || '',
    username: actionData?.fields?.username || '',
    password: actionData?.fields?.password || '',
    firstName: actionData?.fields?.firstName || '',
    lastName: actionData?.fields?.lastName || ''
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, field: string) => {
    setFormData( form => ({
      ...form,
      [field]: event.target.value
    }))
  }

  useEffect(() => {
    // clear the form if we switch forms
    if (!firstLoad.current) {
      const newState = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        username: ''
      }
      setErrors(newState)
      setFormError('')
      setFormData(newState)
    }
  }, [action])

  useEffect(() => {
    if (!firstLoad.current) {
      setFormError('')
    }
  }, [formData])

  useEffect(() => {
    // we don't want to reset errors on page load because we want to see them
    firstLoad.current = false
  }, [])

  return (
    // <Layout>
      <div className='h-screen font-serif flex justify-center items-center flex-col gap-y-4'>
        <button 
          onClick={() => setAction(action === 'login' ? 'register' : 'login')}
          className='absolute top-8 right-8 bg-black px-3 py-2 text-slate-50 font-semibold transition duration-300 ease-in-out hover:scale-95 cursor-pointer'>{action === 'login' ? 'Sign Up' : 'Sign In'}</button>

        <h2 className='text-5xl font-extrabold text-black'>SoShika Photography!</h2>
        <p className='text-semibold text-black'>{action === 'login' ? 'Log In' : 'Sign Up'}</p>

        {/* {JSON.stringify(formData)} */}

        <form method='post' className='bg-purple-300 p-6 w-96'>
          <div className='text-xs font-semibold text-center tracking-wide text-red-500 w-full'>
            {formError}
          </div>

          <FormField
            htmlFor='email'
            label='Email'
            value={formData.email}
            onChange={e => handleInputChange(e, 'email')}
            error={errors?.email}
          />

          <FormField
            htmlFor='password'
            label='Password'
            type='password'
            value={formData.password}
            onChange={e => handleInputChange(e, 'password')}
            error={errors?.password}
          />

          {
            action !== 'login' ? (
              <>
                <FormField
                  htmlFor='firstName'
                  label='First Name'
                  value={formData.firstName}
                  onChange={e => handleInputChange(e, 'firstName')}
                  error={errors?.firstName}
                />

                <FormField
                  htmlFor='lastName'
                  label='Last Name'
                  value={formData.lastName}
                  onChange={e => handleInputChange(e, 'lastName')}
                  error={errors?.lastName}
                />

                <FormField
                  htmlFor='username'
                  label='Username'
                  value={formData.username}
                  onChange={e => handleInputChange(e, 'username')}
                  error={errors?.username}
                />
              </>
            ) : null
          }

          <div className='w-full text-center space-x-6 p-2'>
            <button
              type='submit'
              name='_action'
              className='mt-2 bg-slate-50 px-3 py-2 text-black font-semibold transition duration-300 ease-in-out hover:bg-slate-300 hover:scale-95 cursor-pointer'
              value={action}>
                {
                  action === 'login' ? 'Sign In' : 'Sign Up'
                }
            </button>
          </div>

        </form>
      </div>
    // </Layout>
  );
}