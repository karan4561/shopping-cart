import React from 'react'
import { FireIcon } from '@heroicons/react/24/solid'
function Sidebar() {
  return (
    <div className='flex-col space-y-8 font-bold ml-16 w-[150px] border-r-2 border-red-50 mt-16'>
        <div className='text-green-300 '>
            <FireIcon className='h-5 w-5 float-left'/>
             Categories
             <hr className="w-16 h-0.5 bg-gray-100 opacity-70 border-0 rounded ml-5 my-6 dark:bg-gray-700"/>
        </div>
        <p>Burger</p>
        <p>BBQs</p>
        <p>Breads</p>
        <p>Chocolates</p>
        <p>Drinks</p>
    </div>
  )
}

export default Sidebar