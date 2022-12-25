import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <p className='text-center text-slate-400 py-3'>© 2022 All rights reserved. <Link to="/" className='text-red-500'>Hossein Kavand</Link></p>
  )
}
