"use client"
import { FuelIcon, HistoryIcon, HomeIcon, SettingsIcon } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

const Sidebar = () => {
    const sideMenus = [
        {
            icon:<HomeIcon/>,
            name:'Home',
            path:'/dashboard/home'
        },
        {
            icon:<HistoryIcon/>,
            name:'History',
            path:'/dashboard/history'
        },
        {
            icon:<FuelIcon/>,
            name:'Billing',
            path:'/dashboard/billing'
        },
        {
            icon:<SettingsIcon/>,
            name:'Settings',
            path:'/dashboard/settings'
        }
    ]

    const pathName = usePathname()
    useEffect(()=>{
       
    },[])
  return (
    <div className='w-64 border-2 h-screen py-4 px-4 flex flex-col '>
        <div className='border-b-2  flex items-center justify-center'>
        <Image src="/logo/logo.svg" alt='logo' width={100} height={100}/>
        </div>
        <div className='mt-16 flex-1'>
            {sideMenus.map((menu,key)=>(
                <div className={`flex gap-2 items-center my-4 hover:bg-purple-700 hover:px-2 hover:text-white py-1 rounded-md duration-300 cursor-pointer ${pathName==menu.path ? 'bg-purple-700 px-2 py-1 rounded-md':''}`}>
                  {menu.icon}
                  <h2>{menu.name}</h2>
                </div>
            ))}
        </div>
        <div>
            <h2 className='cursor-pointer hover:bg-purple-700 hover:px-2 hover:text-white rounded-md duration-300 hover:py-1'>Total usage</h2>
        </div>

       
    </div>
  )
}

export default  Sidebar