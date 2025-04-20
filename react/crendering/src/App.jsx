import { useState } from 'react'
import './App.css'
import LogoutBtn from './components/logoutbtn';
import LoginBtn from './components/loginbtn';


function App() {
  const[isLoggedIn, setLoggedIn] = useState(true);

  // if(isLoggedIn){
  //   return(
  //     <LogoutBtn></LogoutBtn>
  //   )
  // }
  // else {
  //   return(
  //     <LoginBtn></LoginBtn>
  //   )
  // }     ////this was using if else condition 

  // this is using ternary operator 
  // return(
  //   <div>
  //     {isLoggedIn ? <LogoutBtn/> : <LoginBtn/> }   
  //     {/* this simply means that if isloggedin is true(?) then return logoutbutn else(:) login btn  */}
  //   </div>
  // )

  //now this is using the logical operators 
  // return(
  //   <div>
  //     <h1> welcome everyone to here</h1>
  //     <div>
  //       {isLoggedIn && <LogoutBtn/>}
  //       {!isLoggedIn && <LoginBtn/>}
  //       {/* this means if the islogges in is true then only the logout btn will get render  */}
  //     </div>
  //   </div>
  // )

  //now we are showing with the early  return mns the codes down will not get render if statisfird

  if(!isLoggedIn){
    return(
      <LoginBtn></LoginBtn>
    )
  }
  return(
    <div>
      <h1> welcome everyone to here</h1>
      <div>
        {isLoggedIn && <LogoutBtn/>}
        {/* this means if the islogges in is true then only the logout btn will get render  */}
      </div>
    </div>
  )

}

export default App
