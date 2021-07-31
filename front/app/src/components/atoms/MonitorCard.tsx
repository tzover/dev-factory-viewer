import React, { useState } from 'react'
import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core/Modal'

// interface
interface MonitorCardIF {
  place?: string
  path?: string
}

// Style
const MediaContainer = styled(Card)`
  width: 18%;
  min-width: 180px;
  height: 25vh;
  margin: 0.25rem;
`
const MediaActionArea = styled(CardActionArea)`
  width: 100%;
  height: 100%;
`
const ModalWindow = styled.div`
  position: absolute;
  top: 20%;
  left: 8%;
  width: 80%;
  background: #ffffff;
  border: 2px solid #000;
  box-shadow: 5rem;
`

// Main
const MonitorCard: React.FC<MonitorCardIF> = ({ place, path }) => {
  const [open, setOpen] = useState<boolean>(false)

  const monitor: JSX.Element = (
    <CardMedia component='img' alt='Contemplative Reptile' src={path} />
  )

  const body: JSX.Element = (
    <ModalWindow>
      <h2 id='simple-modal-title'>Place : {place}</h2>
      {monitor}
    </ModalWindow>
  )

  const onClickCard = () => {
    setOpen(true)
  }
  const modalClose = () => {
    setOpen(false)
  }

  return (
    <MediaContainer>
      <MediaActionArea onClick={() => onClickCard()}>
        {monitor}
        <CardContent>
          <Typography gutterBottom variant='body2'>
            Place : {place}
          </Typography>
        </CardContent>
      </MediaActionArea>
      <Modal
        open={open}
        onClose={modalClose}
        aria-labelledby='simple-modal-title'
      >
        {body}
      </Modal>
    </MediaContainer>
  )
}
// Memo
// <Typography gutterBottom variant='body2'>  variant = caption or overline

MonitorCard.defaultProps = {
  place: 'none',
  path: 'none',
}

export default MonitorCard
