import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import LoggerComponent from './components/loggercomponent'
import TimeComponent from './components/timecomponent'
import dataFetcher from './components/datafetcher'


function App() {
  // const [count,setCount] = useState(0);
  // const [total,setTotal] = useState(0);
  // first = side effect function (like fetch api, db connection , alert etc)
  // second = clean up function (like removing of event listner when comonent unmounted/removed etc)
  // third = comma seprated dep list (entities for which side effect funtion will trigger there are many comma seprated entities ) 

  //variation 1 -> runs everytime on each render 
  // useEffect(() => {
  //   alert("this is an alert call");
  // })
  
  // variation 2 -> runs only first render
  // useEffect(() => {
  //     alert("this is the only  alert call");
  //   },[])

  // variation 3 -> runs when the count is updated .. and with the first render 
  // useEffect(() => {
  //     alert("this is the only  alert call");
  //   },[count])

  // variation 4 -> runs when the multiple dependecies/variable are updated  
  // useEffect(() => {
  //     alert("this is the only  alert call");
  //   },[count, total])

  // variation 5 -> lets add clean up function   
  // useEffect(() => {
  //     alert("this is the only  alert call");
  //     return(
  //       alert(" the last count value is unmounted/removed")
  //     )
  //   },[count])


  // function handleClick(){
  //   setCount (count+1);
  // }
  // function handleClickTotal(){
  //   setTotal (total+1);
  // }
  return (
    <div>
      <LoggerComponent/>

      <TimeComponent/> 

      <dataFetcher/>

      {/* <h1>hello sir </h1>
      <button onClick={handleClick}>clickme</button>
      <p> the count is {count}</p><br/>

      <button onClick={handleClickTotal}>total</button>
      <p> the count is {total}</p><br/> */}
    </div>
  )
}

export default App
