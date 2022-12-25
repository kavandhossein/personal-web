import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer'
import { Menu } from '../Menu'

export const Main = () => {
  return (
    <div className="app relative flex flex-col">
      <Menu />
      <div className='mt-28 flex-1'>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}
