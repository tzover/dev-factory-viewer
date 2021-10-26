import type { NextPage } from 'next'
import Card from '../components/atoms/Card'
import SubTitle from '../components/atoms/SubTitle'
import DefaultLayout from '../components/templates/DefaultLayout'
import { menuItems } from '../contexts/AppDefaultContext'

const Home: NextPage = () => {
  const title = 'Home'
  const mainMenuItems = []
  mainMenuItems.push(menuItems[1], menuItems[2], menuItems[3], menuItems[4])

  return (
    <DefaultLayout title={title}>
      <SubTitle subTitle={title} />
      <div className='flex flex-wrap justify-center items-center w-screen mt-5'>
        {mainMenuItems.map((item) => (
          <Card key={item.path} path={item.path}>
            <div className='flex flex-col items-center justify-center h-80 text-black'>
              <p className='text-xl font-bold mb-5'>{item.en}</p>
              <p className='text-base'>- {item.jp} -</p>
            </div>
          </Card>
        ))}
      </div>
    </DefaultLayout>
  )
}

export default Home
