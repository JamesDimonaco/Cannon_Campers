import React from 'react'
import logo from '../../src/images/logos/header-logo.png'
import Image from 'next/image'
import Link from 'next/link'
export function Header() {
  return (
    <header className="sticky top-0 bg-white py-3 px-4 text-gray-500 drop-shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <Image width={100} height={100} src={logo.src} />
        </Link>
        <nav>
          <Link href="/" className="px-2 text-gray-500 hover:text-gray-800">
            Home
          </Link>
          <a href="#" className="px-2 text-gray-500 hover:text-gray-800">
            About
          </a>
          <a href="#" className="px-2 text-gray-500 hover:text-gray-800">
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}
