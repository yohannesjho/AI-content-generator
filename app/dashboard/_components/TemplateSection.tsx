import Templates from '@/app/(data)/Templates'
import React, { useEffect, useState } from 'react'
import TemplateCard from './TemplateCard'


 

const TemplateSection = ({inputValue}:any) => {
    const [templateList, setTemplateList] = useState(Templates)

    useEffect(()=>{
         if(inputValue){
            const filteredTemplates = Templates.filter(template=>
                template.name.toLowerCase().includes(inputValue.toLowerCase())
            )

            setTemplateList(filteredTemplates)
         }
         else{
            setTemplateList(Templates)
         }
        console.log(inputValue)
     },[inputValue])

    
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4'>
         {templateList.map((item,index)=>(
            <TemplateCard
            key={index}
            icon={item.icon}
            name={item.name}
            desc={item.desc}/>
         ))}
    </div>
  )
}

export default TemplateSection