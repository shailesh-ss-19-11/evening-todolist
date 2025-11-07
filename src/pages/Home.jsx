import React, { createContext, useState } from 'react'
import DrillComponent1 from '../propsdrilling/DrillComponent1'

export const SendDataContext = createContext(null);

const Home = () => {
  const [name, setname] = useState("")

  // let name = "test"
  let obj = {
    name: "shailesh",
    age: 55
  }

  const takeData = (name) => {
    setname(name);
  }

  return (
    <div>
      Home
      <SendDataContext value={{ name, obj,takeData }}>
        <DrillComponent1 />
      </SendDataContext>
    </div>
  )
}

export default Home