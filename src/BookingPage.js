import React from 'react'
import BookingForm from './BookingForm'
import './styles.css'

function BookingPage({ formData, setFormData }) {
  return (
    <>
      <div className='book-main-container'>
        <div className='book-header'>
          <h1 className='heading'>Make your Reservations here</h1>
        </div>
        <div className='reservation-form'>
          <BookingForm formData={formData} setFormData={setFormData} />
        </div>
      </div>
    </>
  )
}

export default BookingPage
