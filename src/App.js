import React from 'react'
import './App.css';

import Fruit from './Components/Fruit'
import { withNewFruit } from './Producers/withNewFruit';
import { withUpdatedFruit } from './Producers/withUpdatedFruit';

const App = () => {

  const [ val, setVal ] = React.useState("")

  const [ fruits, setFruits ] = React.useState([ ])

  const clickHandler = () => {
      setFruits(withNewFruit(fruits, val))
      setVal("")
  }

  const updateFruit = (id, newName) => {
      setFruits(withUpdatedFruit(fruits, id, newName))
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