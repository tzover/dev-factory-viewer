import type { NextPage } from 'next'
import DefaultLayout from '../components/templates/DefaultLayout'

const StaffLayout: NextPage = () => {
  const title = 'Staff Layout'
  const subTitle = 'Staff Layout'

  return (
    <DefaultLayout title={title} subTitle={subTitle}>
      <h1>Staff Layout ...</h1>
    </DefaultLayout>
  )
}

export default StaffLayout
