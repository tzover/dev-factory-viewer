import type { NextPage } from 'next'
import DcmMonitor from '../components/atoms/DcmMonitor'
import DefaultMonitor from '../components/atoms/DefaultMonitor'
import DefaultLayout from '../components/templates/DefaultLayout'

const Monitoring: NextPage = () => {
  const title = 'Monitoring'
  const subTitle = 'Factory Monitor'
  const menu = 'monitoring'

  return (
    <DefaultLayout title={title} subTitle={subTitle}>
      <div className='h-screen'>
        <div className='flex text-right w-screen'>
          <p className='w-screen mx-10 text-black'>
            Active Monitors: <span>8</span>
          </p>
        </div>
        <div className='my-5'>
          <DcmMonitor />
          <DefaultMonitor />
        </div>
      </div>
    </DefaultLayout>
  )
}

export default Monitoring
