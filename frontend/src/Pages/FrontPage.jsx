import React from 'react'
import {Link} from 'react-router-dom'

export default function FrontPage() {
  return (
    <>
      <img src="./assets/Logo.png" alt="" className='absolute z-10 bottom-0 center w-80' />
      <div className='h-screen flex justify-center items-center'>
        <div className='w-fit h-fit backdrop-filter backdrop-blur-lg bg-[#a851ea65] py-20 px-10 lg:py-24 lg:px-20 rounded-3xl'>
          <button className='p-5 m-5 bg-white w-64 rounded-2xl font-extrabold hover:bg-slate-200' >
            <Link to={'/signup'}>
              Create a new Account
            </Link>
          </button><br />
          <button className='p-5 m-5 bg-white w-64 rounded-2xl font-extrabold hover:bg-slate-200' >
            <Link to={'/login'}>
              Login to existing Account
            </Link>
          </button>
        </div>
      </div>
    </>
  )
}
