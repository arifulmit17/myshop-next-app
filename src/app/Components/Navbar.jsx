import Link from 'next/link'
import React from 'react'
import LogoutButton from './LogoutButton'

export default function Navbar() {
    const links=<>
    <Link href={'/'}>
    <li className='mx-10'>Home</li>
    </Link>
    <Link href={'/products'}>
    <li className='mx-10'>Products</li>
    </Link>
    <Link href={'/dashboard/add-product'}>
    <li className='mx-10'>Add Products</li>
    </Link>
    <Link className='mx-10' href={'/login'}>
    <li>Login</li>
    </Link>
    
            
    </>
  return (
    <div>
        <div className="navbar text-primary bg-base-300 sticky top-0 z-[100] shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-primary text-xl">My-shop</a>
  </div>
  <div className="navbar-center hidden lg:flex gap-5">
    <ul className="menu menu-horizontal px-1 ">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <input type="checkbox" value="night" className="toggle mr-5 theme-controller" />
    <LogoutButton></LogoutButton>
  </div>
</div>
    </div>
  )
}
