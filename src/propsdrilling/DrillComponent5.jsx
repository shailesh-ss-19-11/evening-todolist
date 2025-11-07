import React, { useContext } from 'react'
import { SendDataContext } from '../pages/Home'
import { ThemeContext } from './DrillComponent4';

const DrillComponent5 = () => {
  const getData = useContext(SendDataContext);
  const themeContext = useContext(ThemeContext);
  console.log(getData);
  return (
    <div>
      DrillComponent5
      <h2>In drillcomponent5 I am getting name = {getData.name || "vedika"}</h2>
      <h2> {getData.obj.name}</h2>
      <h2> {getData.obj.age}</h2>

      <h3 className={themeContext.mode==="dark" ? 'bg-dark text-light' : 'bg-light text-dark'}>This is Testing...</h3>
      <button onClick={()=>getData.takeData("shailesh")}>SendData</button>
    </div>
  )
}

export default DrillComponent5