import { useState } from 'react'
import { Search, Bell, Settings, User } from "lucide-react"

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="bg-[#f3f2f7] p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search here"
            className="pr-10 bg-white p-3 text-lg rounded-[8px] w-[866px] h-[56px] top-[100px] left-[402px] focus:outline-none border-[1px] border-[#EBEBEB]"
          />
          <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        </div>
        <div className="flex space-x-2 w-[291px] h-[54px] top-[41px] left-[1304px]">
          <div className="bg-blue-500 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
            21
          </div>
          <div className="bg-blue-500 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
            53
          </div>
          <div className="bg-blue-800 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
            15
          </div>
          <div className="bg-red-500 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
            18
          </div>
        <div className='flex items-center space-x-4'>
          <p className="font-bold">Hello, Samantha</p>
          <div className="bg-red-500 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
            18
          </div>
        </div>  
        </div>
      </div>
      
    </div>
  )
}