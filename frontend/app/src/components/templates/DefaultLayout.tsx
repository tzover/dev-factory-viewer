import { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'

interface Props {
  children: ReactNode
  title?: string
}

const DefaultLayout: React.FC<Props> = (props) => {
  const { children, title = 'Based NextJS' } = props
  return (
    <div className='flex flex-col justify-center items-center min-h-screen text-blue-400 text-sm font-mono'>
      <Header title={title} />
      <main className='flex flex-col flex-1 justify-center items-center w-screen'>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default DefaultLayout
