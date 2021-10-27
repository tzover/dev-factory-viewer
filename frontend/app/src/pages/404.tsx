import type { NextPage } from 'next'
import DefaultLayout from '../components/templates/DefaultLayout'

const Page404: NextPage = () => {
  const title = 'Page 404'
  const subTitle = 'Error'

  return (
    <DefaultLayout title={title} subTitle={subTitle}>
      <h1 className='font-bold text-black text-3xl tracking-widest'>
        404 - Page Not Found
      </h1>
    </DefaultLayout>
  )
}

export default Page404
