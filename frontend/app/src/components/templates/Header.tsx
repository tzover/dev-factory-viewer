import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
import { appName, place, menuItems } from '../../contexts/AppDefaultContext'

interface Props {
  title?: string
}

const Header: React.FC<Props> = (props) => {
  const { title } = props

  const router = useRouter()

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className='bg-blue-100 w-screen'>
          <div className='flex items-center pl-8 h-20'>
            <div className='mr-10'>
              <div className="w-1/4 h-10" onClick={() => router.push('/')}>TopPage</div>
            </div>
            <div className='flex-1'>
              <h1 className='text-center text-black text-2xl font-bold tracking-widest'>
                {appName} <span className='text-base'>( {place} )</span>
              </h1>
            </div>
            <div className='flex space-x-1 items-center mr-5'>
              {menuItems.map((item) => (
                <Link key={item.path} href={`/${item.path}`}>
                  <a className='text-black text-xs hover:bg-gray-300 px-3 py-2 rounded'>
                    {item.jp}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
