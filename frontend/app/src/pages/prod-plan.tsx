import type { NextPage } from 'next'
import DefaultLayout from '../components/templates/DefaultLayout'

const ProdPlan: NextPage = () => {
  const title = 'Production Plan'
  const subTitle = 'Production Plan'

  return (
    <DefaultLayout title={title} subTitle={subTitle}>
      <h1>Production Plan ...</h1>
    </DefaultLayout>
  )
}

export default ProdPlan
