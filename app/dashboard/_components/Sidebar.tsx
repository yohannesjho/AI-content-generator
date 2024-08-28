"use client"
import { FuelIcon, HistoryIcon, HomeIcon, SettingsIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
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
            name:'history',
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
    <div className='h-screen p-5 shadow-sm border'>
        <div className='border-b-2  flex items-center justify-center'>
        <Image src="/logo/logo.svg" alt='logo' width={100} height={100}/>
        </div>
        <div className='mt-16'>
            {sideMenus.map((menu,key)=>(
                <Link href={`/dashboard/${menu.name}`}>
                
                <div key={key} className={`flex gap-2 items-center mb-4 hover:bg-purple-700 hover:px-2 hover:text-white py-1 rounded-md duration-300 cursor-pointer ${pathName==menu.path ? 'bg-purple-700 text-white px-2 py-1 rounded-md':''}`}>
                  {menu.icon}
                  <h2>{menu.name}</h2>
                </div>
                </Link>
            ))}
        </div>
        

       
    </div>
  )
}

export default  Sidebar