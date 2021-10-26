import React from 'react'
import Image from 'next/image'
import { creater } from '../../contexts/AppDefaultContext'
import { useRouter } from 'next/dist/client/router'

const Footer: React.FC = () => {
  const router = useRouter()

  return (
    <footer className='w-full border-t'>
      <div className='flex  justify-center items-center'>
        <div className='flex-1 m-3'>
          <p className='text-center text-black text-base opacity-50 tracking-widest'>
            {creater}
          </p>
        </div>
        <div className='mr-8'>
          <Image
            className='opacity-60 hover:opacity-100'
            src='/backBtn.svg'
            alt='backBtn'
            width={20}
            height={20}
            onClick={() => router.back()}
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer
