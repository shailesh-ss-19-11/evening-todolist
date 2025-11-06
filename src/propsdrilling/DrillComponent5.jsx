import React, { useContext } from 'react'
import { SendDataContext } from '../pages/Home'

const DrillComponent5 = () => {
  const getData = useContext(SendDataContext)
  console.log(getData);
  return (
    <div>
      DrillComponent5
      <h2>In drillcomponent5 I am getting name = {getData.name}</h2>
      <h2> {getData.obj.name}</h2>
      <h2> {getData.obj.age}</h2>
    </div>
  )
}

export default DrillComponent5