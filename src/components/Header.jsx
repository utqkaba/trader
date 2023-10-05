import React from 'react'
import moment from "moment/moment";

function Header() {
  return (
    <div className='text-center'>
      <p className='text-2xl text-white tracking-wide font-bold'>Current Trader</p>
      <div >
        <p>{moment().format("L")} </p>
        <p>{moment().format("dddd")} </p>
      </div>
    </div>
  )
}

export default Header