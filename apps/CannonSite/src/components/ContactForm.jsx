import React, { Fragment, useState } from 'react'
import poster from '../../lib/poster'
import Toast from './Toast'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [formErrors, setFormErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [toastType, setToastType] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setFormErrors({})
    setIsSubmitting(true)

    // Perform form validation
    if (!formData.name) {
      setFormErrors((errors) => ({ ...errors, name: 'Name is required' }))
    }
    if (!formData.email) {
      setFormErrors((errors) => ({ ...errors, email: 'Email is required' }))
    }
    if (!formData.phone) {
      setFormErrors((errors) => ({
        ...errors,
        phone: 'Phone number is required',
      }))
    }

    // Send form data to server or perform other actions
    if (!Object.keys(formErrors).length) {
      // submit form data here
      const response = await poster('contact-emails', formData)

      if (response.status === 200) {
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        })
        setToastMessage('Your message has been sent!')
        setToastType('success')
        setShowToast(true)
      } else {
        setToastMessage('There was an error sending your message.')
        setToastType('error')
        setShowToast(true)
      }
    }

    setIsSubmitting(false)
  }

  return (
    <Fragment>
      <Toast show={showToast} setShow={(e) => setShowToast(e) } message={toastMessage} type={toastType} />
      <div className='flex justify-center content-center'>
      <form className="rounded-lg bg-white p-6 w-1/3" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="mb-2 block font-medium text-gray-700"
            htmlFor="name"
          >
            Your Name (required)
          </label>
          <input
            className={`w-full rounded-lg border border-gray-400 p-2 ${
              formErrors.name ? 'border-red-500' : ''
            }`}
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
          {formErrors.name && (
            <p className="mt-2 text-xs italic text-red-500">
              {formErrors.name}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="mb-2 block font-medium text-gray-700"
            htmlFor="email"
          >
            Your Email (required)
          </label>
          <input
            className={`w-full rounded-lg border border-gray-400 p-2 ${
              formErrors.email ? 'border-red-500' : ''
            }`}
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
          {formErrors.email && (
            <p className="mt-2 text-xs italic text-red-500">
              {formErrors.email}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="mb-2 block font-medium text-gray-700"
            htmlFor="phone"
          >
            Your Telephone Number (required)
          </label>
          <input
            className={`w-full rounded-lg border border-gray-400 p-2 ${
              formErrors.phone ? 'border-red-500' : ''
            }`}
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {formErrors.phone && (
            <p className="mt-2 text-xs italic text-red-500">
              {formErrors.phone}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="mb-2 block font-medium text-gray-700"
            htmlFor="subject"
          >
            Subject
          </label>
          <input
            className="w-full rounded-lg border border-gray-400 p-2"
            type="text"
            name="subject"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label
            className="mb-2 block font-medium text-gray-700"
            htmlFor="message"
          >
            Your Message
          </label>
          <textarea
            className="w-full rounded-lg border border-gray-400 p-2"
            name="message"
            id="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button
          className="rounded-lg bg-indigo-500 py-2 px-4 text-white hover:bg-indigo-600"
          type="submit"
          disabled={isSubmitting}
        >
          Send
        </button>
      </form>
      </div>
    </Fragment>
  )
}
