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
         
         <div className='md:w-64 hidden md:block fixed'>
         <Sidebar />
         </div>
         <div className='md:ml-64 w-full'>
            <Header/> 
            {children}
         </div>
    
        
    </div>
  )
}

export default layout