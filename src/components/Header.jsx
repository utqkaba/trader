import React from 'react'
import moment from "moment/moment";

function Header() {
  return (
    <div className='text-center'>
      <p className='text-3xl text-white tracking-wide font-extralight mb-3 mt-1'>Instant Exchange Conversion</p>
      <div className='mb-3'>
        <p className='text-m font-extralight'>{moment().format("L")} </p>
        <p className='text-m font-extralight'>{moment().format("dddd")} </p>
        {/* not working corretly */}
        <p className='text-sm font-extralight'>{moment().format('LT')}</p>
      </div>
      <hr />
    </div>
  )
}

export default Header