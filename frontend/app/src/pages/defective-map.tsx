import type { NextPage } from 'next'
import DefaultLayout from '../components/templates/DefaultLayout'

const DefectiveMap: NextPage = () => {
  const title = 'Defective Map'
  const subTitle = 'Defective Map'

  return (
    <DefaultLayout title={title} subTitle={subTitle}>
      <h1>Defective Map ...</h1>
    </DefaultLayout>
  )
}

export default DefectiveMap
