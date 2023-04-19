import { useState, useEffect } from 'react'

interface FormFieldProps {
  htmlFor: string,
  label: string,
  type?: string,
  value: any,
  onChange?: (...args: any) => any,
  error?: string
}

export function FormField({
  htmlFor,
  label,
  type = 'text',
  value,
  onChange = () => { },
  error = ''
}: FormFieldProps) {
  const [ errorText, setErrorText ] = useState(error)

  useEffect(() => {
    setErrorText(error)
  }, [error])

  return (
    <>
    <label htmlFor={htmlFor} className='text-black font-light'>{label}</label>

    <input onChange={e => {
      onChange(e)
      setErrorText('')
    }} type={type} id={htmlFor} name={htmlFor} className='border rounded border-solid border-slate-900 p-1' value={value} />

    <div className='text-xs font-semibold text-center tracking-wide text-red-500 w-full'>
      {errorText || ''}
    </div>
    </>
  )
}

export function FormTextField({
  htmlFor,
  label,
  value,
  onChange = () => { },
  error = ''
}: FormFieldProps) {
  const [ errorText, setErrorText ] = useState(error)

  useEffect(() => {
    setErrorText(error)
  }, [error])

  return (
    <>
    <label htmlFor={htmlFor} className='text-black font-light'>{label}</label>

    <textarea onChange={e => {
      onChange(e)
      setErrorText('')
    }} id={htmlFor} name={htmlFor} className='h-28 border rounded border-solid border-slate-900 p-1 overflow-scroll' value={value} />

    <div className='text-xs font-semibold text-center tracking-wide text-red-500 w-full'>
      {errorText || ''}
    </div>
    </>
  )
}
