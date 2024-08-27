'use client'
import React, { useEffect, useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { CopyIcon } from 'lucide-react';

interface PROPS {
  aiOutput: string
}
export default function OutputSection({ aiOutput }: PROPS) {
  const editorRef:any = useRef()
  useEffect(() => {
    const editorReference = editorRef.current.getInstance()
    editorReference.setMarkdown(aiOutput)
    console.log(aiOutput)
  }, [aiOutput])
  return (
    <div className='bg-white'>
      <div className='flex justify-between items-center mt-4 bg-slate-100'>
        <p>Your result</p>
        <Button>
          <CopyIcon />
          Copy
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="your result will appear here"
        initialEditType="markdown"
        height="600px"
        useCommandShortcut={true}
        onChange={() => console.log(editorRef.current.getInstance().getMarkdown())}
      
      />
    </div>
  )
}
