import React from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'

function Pagenotfound() {
  return (
    <>
    <Header />
      <section className='my-5 container'>
        <h1 className='text-center text-danger'>404</h1>
        <p className='text-center'>Page not found</p>
      </section>
     <Footer/>
      
    </>
  )
}

export default Pagenotfound
