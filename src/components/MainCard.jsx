import React from 'react'
import ConvertBox from "./ConvertBox.jsx";
import Header from "./Header.jsx";
import { BlInput, BlButton } from "@trendyol/baklava/dist/baklava-react";

function MainCard() {
  return (
    <div className='flex flex-col h-3/4 w-1/3 items-center justify-center bg-slate-400 text-white border-2 border-white rounded-lg'>
      <Header />
      <div className='p-6'>
        <BlInput type="number" label="Amount" size="large" required icon="price_settings"></BlInput>
      </div>
      <ConvertBox />
      <div className='p-6'>This is a dynamic data from get API</div>
      <BlButton size="large" icon="change">Get Exchange Rate</BlButton>
    </div>
  )
}

export default MainCard