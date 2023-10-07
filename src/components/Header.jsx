import React from 'react'
import moment from "moment/moment";

function Header() {
  return (
    <div className='text-center'>
      <p className='text-2xl text-white tracking-wide font-bold mb-3'>Current Trader</p>
      <div className='mb-3'>
        <p>{moment().format("L")} </p>
        <p>{moment().format("dddd")} </p>
      </div>
      <hr />
    </div>
  )
}

export default Header