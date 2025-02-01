import React from 'react'
import { Search } from 'lucide-react'

function SearchBar() {
  return (
    <div className="relative ">
      <input
        type="text"
        placeholder="Search here"
        className="pr-10 bg-white text-xl p-3 rounded-[8px] w-[800px] focus:outline-none border-[1px] border-[#EBEBEB]"
      />
      <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={25} />
    </div>
  )
}

export default SearchBar
