import React, { useState, useEffect, useCallback } from 'react'
import axios, { AxiosError, AxiosResponse } from 'axios'
import styled from 'styled-components'
import MonitorCard from '../atoms/MonitorCard'
import MonitorOption from './MonitorOption'

// interface
interface GetMonitorResponseIF {
  id: number
  place: string
  path: string
  website: string
  phone: string
  email: string
  name: string
}
interface ErrorResponseIF {
  error: string
}

// Style
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 1rem;
`
const MonitorContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

// Main
const MonitorView: React.FC = () => {
  const [MonitorNum, setMonitorNum] = useState<number>(0)
  const [monitorResponse, setMonitorResponse] = useState<
    GetMonitorResponseIF[]
  >([])
  const [changeState, setChangeState] = useState<boolean>(false)

  const initialMonitorNum: number = 8

  const GetMonitorEdge = useCallback(async () => {
    await axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res: AxiosResponse<GetMonitorResponseIF[]>) => {
        const resData: GetMonitorResponseIF[] = res.data.filter(
          (val) => val != null,
        )
        setMonitorResponse(resData)
        setMonitorNum(resData.length)
      })
      .catch((e: AxiosError<ErrorResponseIF>) => {
        if (e.response !== undefined) {
          console.error(e.response.data.error)
        }
        setMonitorNum(initialMonitorNum)
        setChangeState(true)
      })
    setChangeState(true)
  }, [monitorResponse, changeState, MonitorNum])

  const RenderMonitors = (monitorStatus: GetMonitorResponseIF[]) =>
    monitorStatus.map((status) => (
      <MonitorCard key={status.id} path={status.name} place={status.name} />
    ))

  useEffect(() => {
    GetMonitorEdge()
  }, [changeState])

  return (
    <MainContainer>
      <MonitorOption activeEdge={MonitorNum} />
      <MonitorContainer>{RenderMonitors(monitorResponse)}</MonitorContainer>
    </MainContainer>
  )
}

export default MonitorView
