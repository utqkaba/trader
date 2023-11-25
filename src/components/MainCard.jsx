import React from 'react'
import ConvertBox from "./ConvertBox.jsx";
import Header from "./Header.jsx";
import { BlInput, BlButton } from "@trendyol/baklava/dist/baklava-react";

function MainCard() {
  return (
    <div className='flex flex-col p-6 h-auto w-2/6 items-center justify-center bg-slate-700 text-white border-2 border-orange-400 rounded-lg bg-opacity-10'>
      <Header />
      <div className='p-6'>
        <BlInput type="number" label="Amount" size="large" required icon="price_settings"></BlInput>
      </div>
      <ConvertBox />
      <div className='p-6 mb-3'>This is a dynamic data from get API</div>
      <BlButton size="large" icon="change" className='hover:scale-110 duration-500 mb-4'>Get Exchange Rate</BlButton>
    </div>
  )
}

export default MainCard