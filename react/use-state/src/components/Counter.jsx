import React from 'react'
import '../components/Counter.css' 

const Counter = () => {

    const [count, setCount] = React.useState(0);

  return (
    <div className='counter-container'>
      <p id='para'> you have clicked {count} times</p>
      <button id='btn' onClick={() => {setCount(count + 1)}}>click me </button>
    </div>
  )
}

export default Counter
