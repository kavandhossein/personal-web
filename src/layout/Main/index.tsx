import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer'
import { Menu } from '../Menu'
import Modals from './../../components/modals/modals'

export const Main = () => {
  return (
    <div className="app relative flex flex-col">
      <Menu />
      <div className='mt-28 flex-1'>
        <Outlet/>
      </div>
      <Footer/>
      <Modals/>
    </div>
  )
}
