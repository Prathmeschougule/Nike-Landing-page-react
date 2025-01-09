import React from 'react'

function Header() {
  return (
    <nav className=' bg-white z-10 fixed top-0 left-0 right-0 p-4 flex justify-between items-center border   text-neutral-800 max-w-[1200px] mx-auto w-full  '>
      <div className=''>
        <a href=""> <img className=' h-9 text-2xl font-semibold' src="src/assets/Logo/R.png" alt="" /></a>
      </div>
      <div >
        <ul className="flex gap-6 font-semibold">
          <li className="relative after:content-[''] after:absolute after:w-0 after:h-[3px] after:bg-black after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
            New & Featured
          </li>
          <li className="relative after:content-[''] after:absolute after:w-0 after:h-[3px] after:bg-black after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
            Men
          </li>
          <li className="relative after:content-[''] after:absolute after:w-0 after:h-[3px] after:bg-black after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
            Women
          </li>
          <li className="relative after:content-[''] after:absolute after:w-0 after:h-[3px] after:bg-black after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
            Sale
          </li>
          <li className="relative after:content-[''] after:absolute after:w-0 after:h-[3px] after:bg-black after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
            SNKRS
          </li>
        </ul>

      </div>
      <div>
        <button className=' text-white py-1 px-5 bg-red-600'>Login</button>
      </div>
    </nav>

  )
}

export default Header
