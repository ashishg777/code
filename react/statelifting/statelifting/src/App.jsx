import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  const [name, setName] = useState('')
  // create, manage,change state ka access syn kra kr sbhi child mai de diya.
  return (
    <div>
      <Card name={name} setName={setName}/>  
      {/* now child (card) have access to name and set name to the app. */}
      <p> the change of value in parent component is {name}</p>
    </div>
    
  )
}

export default App
