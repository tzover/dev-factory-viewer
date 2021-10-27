import type { NextPage } from 'next'
import DefaultLayout from '../components/templates/DefaultLayout'

const Monitoring: NextPage = () => {
  const title = 'Monitoring'
  const subTitle = 'Factory Monitor'

  return (
    <DefaultLayout title={title} subTitle={subTitle}>
      <h1>Monitoring ...</h1>
    </DefaultLayout>
  )
}

export default Monitoring
