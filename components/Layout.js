import Link from 'next/link'
import React from 'react'



function Layout({children}) {
  return (
    <div>
        <div className='flex flex-col justify-between min-h-screen'>
        <header>
          <nav className='flex justify-between items-center px-4 h-12 shadow-md'>
            <Link href = "">
            <header className='text-lg font-bold'>Gebiya</header>
            </Link>
            <div className='flex'>
              <Link href={'/cart'}><p className='p-2'>Cart</p></Link>
              <Link href = {'/login '}><p className='p-2'>Login</p></Link>
            </div>
          </nav>
        </header> 
        <main className='container m-auto mt-4 px-4 '>{children}</main>
        <footer className='flex h-10 justify-center items-center shadow-inner'>fotter</footer>
        </div>
    </div>
  )
}

export default Layout