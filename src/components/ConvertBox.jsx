import React from 'react'
import { BlSelect, BlSelectOption, BlIcon } from "@trendyol/baklava/dist/baklava-react";


function ConvertBox() {
  return (
    <div className='flex flex-col items-center justify-center w-2/3 p-5'>
      <BlSelect label='From' size='large'>
        <BlSelectOption value="tr">Turkiye</BlSelectOption>
        <BlSelectOption value="nl">The Netherlands</BlSelectOption>
        <BlSelectOption value="uk">United Kingdom</BlSelectOption>
      </BlSelect>
      <div className='my-4'>
        <BlIcon name='change_fill' title='change_fill'></BlIcon>
      </div>
      <BlSelect label='To' size='large'>
        <BlSelectOption value="tr">Turkiye</BlSelectOption>
        <BlSelectOption value="nl">The Netherlands</BlSelectOption>
        <BlSelectOption value="uk">United Kingdom</BlSelectOption>
      </BlSelect>

    </div>
  )
}

export default ConvertBox