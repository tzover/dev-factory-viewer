import { ReactNode } from 'hoist-non-react-statics/node_modules/@types/react'
import { useRouter } from 'next/dist/client/router'
import React from 'react'

interface Props {
  children: ReactNode
  path?: string
  menu?: string
}

const Card: React.FC<Props> = (props) => {
  const { children, path, menu } = props
  const router = useRouter()
  const onClickCard = () => {
    if (menu === 'monitoring') return
    router.push(`/${path}`)
  }
  return (
    <div
      className='shadow-2xl rounded-md border border-gray-400  hover:bg-blue-100 p-3 m-2 w-1/5'
      onClick={onClickCard}
    >
      {children}
    </div>
  )
}

export default Card
