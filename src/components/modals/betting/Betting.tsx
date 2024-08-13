import React from 'react'
import ModalsLayout from '../modalsLayout'

const Betting = ({show,setShow}:any) => {
  return (
    <ModalsLayout flow={0} setFlow={() => {}} header="Betting" setShow={setShow} show={show} >Betting</ModalsLayout >
  )
}

export default Betting