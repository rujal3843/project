import React from 'react'
import { FaSearch } from "react-icons/fa";


const Search = () => {
  return (
    <>
     <form className="flex shadow-md p-1 rounded items-center">
            <input
              type="text"
              placeholder="Search here"
              className="outline-none p-2 "
            />
            <FaSearch className="text-xl text-[blue]" />
          </form>
    </>
  )
}

export default Search