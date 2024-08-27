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
       
     },[inputValue])

    
  return (
    <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4'>
         {templateList.map((item,index:number)=>(
            <TemplateCard
            key={index}
            icon={item.icon}
            name={item.name}
            desc={item.desc}
            category={item.category}
            slug={item.slug}
            aiPrompt={item.aiPrompt}
            form={item.form}
            />
         ))}
    </div>
  )
}

export default TemplateSection