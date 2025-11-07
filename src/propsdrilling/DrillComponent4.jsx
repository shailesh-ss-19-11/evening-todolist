import React, { createContext, useContext } from 'react'
import DrillComponent5 from './DrillComponent5'
import { SendDataContext } from '../pages/Home'

export const ThemeContext = createContext(null);

const DrillComponent4 = () => {
  const data = useContext(SendDataContext);
  return (
    <div>
      DrillComponent4
      <ThemeContext value={{ mode: "light" }}>
        <DrillComponent5 />
      </ThemeContext>
    </div>
  )
}

export default DrillComponent4