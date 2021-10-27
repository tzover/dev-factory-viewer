import React from 'react'
import { monitorDemo } from '../../contexts/AppDefaultContext'
import Card from './Card'

const DefaultMonitor: React.FC = () => {
  return (
    <div className='flex flex-wrap justify-evenly w-screen pt-5 pb-10'>
      {monitorDemo.monitors.map((monitor) => (
        <Card key={monitor.id} menu='monitoring'>
          <div className='text-base sm:text-sm'>
            <p className='text-base'>- Place {monitor.id} -</p>
            <div className='flex flex-col items-center justify-center text-black h-60'>
              <p className='text-xl font-bold'>TEST</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}

export default DefaultMonitor
