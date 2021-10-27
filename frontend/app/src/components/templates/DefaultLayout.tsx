import { ReactNode } from 'react'
import SubTitle from '../atoms/SubTitle'
import Footer from './Footer'
import Header from './Header'

interface Props {
  children: ReactNode
  title?: string
  subTitle?: string
}

const DefaultLayout: React.FC<Props> = (props) => {
  const { children, title = 'Based NextJS', subTitle } = props
  return (
    <div className='flex flex-col justify-center items-center min-h-screen text-blue-400 text-sm font-mono'>
      <Header title={title} />
      <SubTitle subTitle={subTitle} />
      <main className='flex flex-col flex-1 justify-center items-center w-screen'>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default DefaultLayout
