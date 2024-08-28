'use client'
import React, { useState } from 'react'
import { TEMPLATE } from '../../_components/TemplateCard'
import Templates from '@/app/(data)/Templates'
import FormSection from '../FormSection'
import OutputSection from '../OutputSection'
import { chatSession } from '@/utils/AiModel'
import { db } from '@/utils/db'
import { AiOutput } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import { fetchHistory } from '../../history/page'

 interface PROPS {
  params : {
    'template-slug':string
  }
}



const TemplateContent = (props:PROPS) => {
 const selectedTemplate:TEMPLATE|undefined = Templates?.find((item)=>item.slug==props.params['template-slug'])
 const [loading, setLoading] = useState(false)
 const [ aiOutput, setAiOutput] = useState<string>('')
 const {user} = useUser()

 const GenerateAiContent = async (formData:any)=>{
  setLoading(true)
   const selectedPrompt = selectedTemplate?.aiPrompt
   const FinalAiPrompt =JSON.stringify(formData)+"," +selectedPrompt
   const result = await chatSession.sendMessage(FinalAiPrompt)
   setAiOutput(result.response.text())
   await SavedInDb(formData,selectedTemplate?.slug,result.response.text())
   
   setLoading(false)
 }

 const SavedInDb = async (formData:any,slug:any,aiResp:any,)=>{
        const result = await db.insert(AiOutput).values({
                     formData:formData,
                     templateSlug:slug,
                     aiResponse:aiResp,
                     createdBy:user?.primaryEmailAddress?.emailAddress,
                     createdAt:Date()
                  })
          console.log(result)
 }

 
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 bg-slate-100'>
      {/* form section */}
      <FormSection  selectedTemplate={selectedTemplate} userInputData={(v:any)=>GenerateAiContent(v)} loading={loading} />
      {/* output section */}
      <div className='col-span-2'>
      <OutputSection aiOutput={aiOutput}/>
      </div>
     
    </div>
  )
}

export default TemplateContent