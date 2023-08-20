import React from 'react'
import Navigation from '../../Navigation-Menu/Navigation'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <>
        <Navigation />
        <div style={
            {
              textAlign:'-webkit-center',
              padding:'20px'
            }
          }>
          <h5
            style={
              {
                paddingBottom:'10px'
              }
            }
          >Please call 1800 4040 Samsung or Send your queries in below form.</h5>
          <ContactForm />
        </div>
    </>
  )
}

export default Contact