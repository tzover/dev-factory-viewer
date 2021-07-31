import React from 'react'
import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'
import { useHistory } from 'react-router-dom'

// interface
interface MenuListIF {
  en: string
  ja: string
}

// Style
const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
`
const MenuListTable = styled(Paper)`
  margin: 1rem;
  width: 20%;
  &:hover {
    background: #88ccff;
    opacity: 0.8;
  }
`
const MenuTextContainer = styled.div`
  margin: 5rem auto;
  text-align: center;
`
const MenuEnText = styled.p`
  font-size: 1.5rem;
`
const MenuJaText = styled.p`
  font-size: 1rem;
`
// Main
const MainMenu: React.FC = () => {
  const history = useHistory()

  const MenuLists: MenuListIF[] = [
    { en: 'Monitoring', ja: '工場見学' },
    { en: 'Staff Layout', ja: '人員配置' },
    { en: 'Production plan', ja: '生産計画' },
    { en: 'Defective Map', ja: '不良Map' },
  ]

  const onClickMenu = (menu: string) => {
    console.log('test: ', menu)
    switch (menu) {
      case 'monitoring':
        history.push('/monitor')
        break
      case 'staff layout':
        history.push('/staff-layout')
        break
      case 'production plan':
        history.push('/prod-plan')
        break
      case 'defective map':
        history.push('/defective-map')
        break
      default:
        break
    }
  }

  const RenderMenuList = (menuLists: MenuListIF[]) =>
    menuLists.map((menu: MenuListIF) => (
      <MenuListTable
        elevation={3}
        key={menu.en}
        onClick={() => onClickMenu(menu.en.toLowerCase())}
      >
        <MenuTextContainer>
          <MenuEnText>{menu.en}</MenuEnText>
          <MenuJaText>- {menu.ja} -</MenuJaText>
        </MenuTextContainer>
      </MenuListTable>
    ))

  return <MainContainer>{RenderMenuList(MenuLists)}</MainContainer>
}
export default MainMenu
