import React from 'react'
import './App.css';

import Fruit from './Components/Fruit'
import { getId } from './Utils/getId';

const App = () => {

  const [ val, setVal ] = React.useState("")

  const [ fruits, setFruits ] = React.useState([
      { id: getId(), name: "alma", color: "red" },
      { id: getId(), name: "körte", color: "yellow" },
      { id: getId(), name: "szilva", color: "purple" }
  ])

  const clickHandler = () => {
      setFruits([ ...fruits, { id: getId(), name: val, color: "unknown" } ])
      setVal("")
  }

  const updateFruit = (id, newName) => {
      setFruits(fruits.map(fruit => fruit.id === id ? { ...fruit, name: newName } : fruit))
  }

  return (
      <div id="app-container">
          <input type="text" value={val} onChange={(event) => setVal(event.target.value)}/>

          <button onClick={clickHandler}>Add</button>

          { fruits.map(fruit => <Fruit key={fruit.id} fruit={fruit} onSave={updateFruit}/> ) }
      </div>
  )
}

export default App;