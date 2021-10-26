import type { NextPage } from 'next'
import SubTitle from '../components/atoms/SubTitle'
import DefaultLayout from '../components/templates/DefaultLayout'

const Monitoring: NextPage = () => {
  const title = 'Monitoring'

  console
  return (
    <DefaultLayout title={title}>
      <SubTitle subTitle={title} />
    </DefaultLayout>
  )
}

export default Monitoring
