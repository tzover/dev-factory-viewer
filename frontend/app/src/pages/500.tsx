import type { NextPage } from 'next'
import DefaultLayout from '../components/templates/DefaultLayout'

const Page500: NextPage = () => {
  const title = 'Page 500'
  const subTitle = 'Error'

  return (
    <DefaultLayout title={title} subTitle={subTitle}>
      <h1 className='font-bold text-black text-3xl tracking-widest'>
        500 - Server-side error occurred
      </h1>
    </DefaultLayout>
  )
}

export default Page500
