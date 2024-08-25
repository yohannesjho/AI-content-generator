import { SearchIcon } from 'lucide-react'
 
import React from 'react'

const Header = () => {

    
  return (
    <div className='flex justify-between border py-2 px-4 items-center rounded-md'>
        <div className='flex gap-2'>
        <SearchIcon/>
        <input  type="text" placeholder='search...' className='border px-2 rounded-md outline-none'/>
        </div>
        <div>
            <h2 className='text-xs bg-purple-700 text-white px-2 py-1 rounded-md'>join for a membership of $9.999/month</h2>
        </div>
        
    </div>
  )
}

export default Header