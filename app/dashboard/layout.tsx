import React from 'react'
import Sidebar from './_components/Sidebar';
import Header from './_components/Header'; 

 

const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className='flex h-full'>
         
         
         <Sidebar />
         
         <div className='border-2 flex-1'>
            <Header/> 
            {children}
         </div>
    
        
    </div>
  )
}

export default layout