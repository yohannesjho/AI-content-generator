'use client'
import React, { useState } from 'react'
import { TEMPLATE } from '../_components/TemplateCard'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { LoaderIcon } from 'lucide-react'


interface PROPS {
  selectedTemplate?: TEMPLATE
  userInputData: any
  loading: boolean
}
export default function FormSection({ selectedTemplate, userInputData, loading }: PROPS) {
  const [formData, setFormData] = useState<any>()
  const onChangeHandler = (e: any) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleonSubmit = (e: any) => {
    e.preventDefault()
    userInputData(formData)
  }
  return (
    <div className='' >
      <div className='mt-4 ml-4'>
        <Link  href='/dashboard'>
          <Button>Back</Button>
        </Link>
      </div>

      <div className='border-2 m-4 mt-0 shadow:md p-4 bg-white'>


        {/* @ts-ignore */}
        <Image src={selectedTemplate?.icon} width={50} height={50} alt='icon' />
        <h2 className='font bold text-lg'>{selectedTemplate?.name}</h2>
        <p className='text-sm'>{selectedTemplate?.desc}</p>
        <form action="" className='my-8 space-y-6' onSubmit={handleonSubmit}>
          {selectedTemplate?.form?.map((item, index) => (
            <div key={index} className=''>
              <label className='font-bold text-md mb-2'>{item.label}</label>
              {item.field == 'input' ? <Input name={item.name} required={item?.required} onChange={(e) => onChangeHandler(e)} className='w-1/2' /> : item.field == "textarea" ? <Textarea onChange={(e) => onChangeHandler(e)} className='w-3/4' /> : 'NULL'}
            </div>
          ))}
          <Button type='submit' className='w-full' disabled={loading}>{loading&&<LoaderIcon className='animate-spin'/>}Generate Content</Button>
        </form>
      </div>

    </div>
  )
}
