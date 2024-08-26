import Image from 'next/image';
import React, { FC } from 'react'

interface TemplateCardProps {
     
    icon: string;
    name: string;
    desc: string;
  }
  

const TemplateCard :FC<TemplateCardProps> = ({ icon, name, desc })  => {

  return (
    <div className='border-2 p-4 flex flex-col gap-2 rounded-md cursor-pointer shadow-md hover:scale-110 transition-transform duration-300 ease-in-out;
}
 '>
        <Image src={icon} width={50} height={50} alt='icon'/>
        <h2 className='font-bold text-lg'>{name}</h2>
        <p className='text-sm'>{desc}</p>
   </div>
  )
}

export default TemplateCard