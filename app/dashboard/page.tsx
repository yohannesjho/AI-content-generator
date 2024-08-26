'use client'
import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TemplateSection from './_components/TemplateSection'

const dashboard = () => {
  const [inputValue, setInputValue] = useState<string>()
  return (
    <div className='h-full' >
      {/* search section */}
      <SearchSection inputSearch={(value:string)=>setInputValue(value)}/>
      {/* template section */}
      <TemplateSection inputValue={inputValue}/>
    </div>
  )
}

export default dashboard