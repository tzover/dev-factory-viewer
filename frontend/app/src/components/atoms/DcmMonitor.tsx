import React from 'react'
import { Popover, Transition } from '@headlessui/react'
import { monitorDemo } from '../../contexts/AppDefaultContext'
import Card from './Card'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const DcmMonitor: React.FC = () => {
  return (
    <div className='relative  w-screen '>
      <nav aria-label='Top' className='mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='border-b-4 border-blue-100'>
          <div className='h-12 flex items-center space-x-8'>
            <Popover.Group className='hidden lg:ml-8 lg:block lg:self-stretch'>
              <div className='h-full flex space-x-8'>
                {monitorDemo.monitors.map((monitor) => (
                  <Popover key={monitor.id} className='flex'>
                    {({ open }) => (
                      <>
                        {/* Menu Bar */}
                        <div className='relative flex'>
                          <Popover.Button
                            className={classNames(
                              open
                                ? 'border-blue-500 text-blue-500'
                                : 'border-transparent text-gray-700 hover:text-gray-800',
                              'relative flex items-center transition-colors ease-out duration-200 text-base font-medium border-b-4 -mb-px pt-px',
                            )}
                          >
                            {monitor.name}
                          </Popover.Button>
                        </div>

                        {/* Menu Bar */}
                        <Transition
                          as={React.Fragment}
                          enter='transition ease-out duration-200'
                          enterFrom='opacity-0'
                          enterTo='opacity-100'
                          leave='transition ease-in duration-150'
                          leaveFrom='opacity-100'
                          leaveTo='opacity-0'
                        >
                          <Popover.Panel className='absolute top-full inset-x-0 text-sm text-gray-500 '>
                            <div className='relative bg-white mb-10'>
                              <div className='mx-auto'>
                                <div className='flex flex-wrap justify-evenly w-screen pt-5 pb-10'>
                                  {monitor.sections.map((section) => (
                                    <Card menu='monitoring' key={section.id}>
                                      <div className='group relative text-base sm:text-sm'>
                                        <p className='text-base'>
                                          - {monitor.name} -
                                        </p>
                                        <div className='flex flex-col items-center justify-center text-black h-60'>
                                          <p className='text-xl font-bold'>
                                            {section.name}
                                          </p>
                                        </div>
                                      </div>
                                    </Card>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                ))}
              </div>
            </Popover.Group>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default DcmMonitor
