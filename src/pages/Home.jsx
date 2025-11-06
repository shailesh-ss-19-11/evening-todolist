import React, { createContext } from 'react'
import DrillComponent1 from '../propsdrilling/DrillComponent1'

export const SendDataContext = createContext(null);

const Home = () => {

  let name = "test"
  let obj = {
    name: "shailesh",
    age: 55
  }

  return (
    <div>
      Home
      <SendDataContext value={{ name, obj }}>
        <DrillComponent1 />
      </SendDataContext>
    </div>
  )
}

export default Home