import React, { useContext, useState, useEffect } from 'react'
import { getCategories } from '../services'
import Link from 'next/link'



const Header = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories)
    })
  }, [])
  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="inline-block w-full border-b border-purple-400 py-8">
        <div className="block md:float-left">
          <Link href="/">
            <span className="cursor-pointer text-4xl font-bold text-black">
           <img className='w-[200px] float-left' src='/logo.png'/>
            </span>
          </Link>
          <div className="dropdown">
    <button className="dropbtn">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
</svg>
    </button>
    <div className="dropdown-content">
    {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <a>
                {category.name}
              </a>
            </Link>
          ))}
    </div>
  </div> 
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="mt-2 ml-4 cursor-pointer align-middle font-semibold text-black md:float-right">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
       
      </div>
    </div>
  )
}

export default Header
