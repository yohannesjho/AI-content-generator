import { SearchIcon } from 'lucide-react'
import React from 'react'

const SearchSection = ({inputSearch}:any) => {
  return (
    <div className='border flex justify-center py-10 bg-gradient-to-br from-purple-700 via-sky-600 to-indigo-400'>
         <div className='flex gap-2 items-center px-2 bg-white w-1/3 rounded-2xl border focus:border-2'>
            <SearchIcon/>
            <input type="text" placeholder='search...' className='outline-none rounded-md px-2 py-1 ' onChange={(e)=>inputSearch(e.target.value)}/>
         </div>
    </div>
  )
}

export default SearchSection