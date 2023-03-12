import React, { useState, useEffect } from 'react'
import logo from '../../src/images/logos/header-logo.png'
import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10)
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos, visible])

  return (
    <header
      className={`fixed top-0 w-full bg-white py-3 px-4 h-16 text-gray-500 transition-all duration-300 drop-shadow-md z-20`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <Image width={100} height={100} src={logo.src} />
        </Link>
        <nav>
          <Link href="/" className="px-2 text-gray-500 hover:text-gray-800">
            Home
          </Link>
          <Link href="/news" className="px-2 text-gray-500 hover:text-gray-800">
            News
          </Link>
          <Link href="/contact" className="px-2 text-gray-500 hover:text-gray-800">
            Contact
          </Link>
          <Link href="/vans-for-sale" className="px-2 text-gray-500 hover:text-gray-800">
            Vans for sale
          </Link>
        </nav>
      </div>
    </header>
  )
}
