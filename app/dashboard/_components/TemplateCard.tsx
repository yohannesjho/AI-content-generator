import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react'

export interface TEMPLATE {
  name: string;
  desc: string;
  icon: string;
  category:string;
  slug:string;
  aiPrompt:string;
  form?:FORM[] 
}

export interface FORM {
  label:string;
  field:string;
  name:string;
  required?:boolean;
}

const TemplateCard = (item:TEMPLATE ) => {

  return (

    
    <div className='border-2 p-4 flex flex-col gap-2 rounded-md cursor-pointer shadow-md hover:scale-110 transition-transform duration-300 ease-in-out;
}
 '>   <Link href={`/dashboard/content/${item.slug}`}>
      <Image src={item.icon} width={50} height={50} alt='icon' />
      <h2 className='font-bold text-lg'>{item.name}</h2>
      <p className='text-sm'>{item.desc}</p>
      </Link>
    </div>
    
  )
}

export default TemplateCard