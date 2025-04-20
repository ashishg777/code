import './App.css'

function App() {
  
  function handleClick() {
    alert("im clicked");
  }
  function handlechange(e){
    console.log("input value changes:",e.target.value );
  }
  function handleChange(e){
    e.preventDefault();
    alert(handleClick);
  }
  return (
    <div>
      <button onClick={handleClick}>
        click me 
      </button><br></br><br></br>

      <p onMouseOver={handleClick}> this is the para for this oproge</p>

      <form onSubmit={handleChange}>
        <input type='text' onChange={handlechange} ></input>
        <button type='submit'>submit</button>
      </form>
    
    </div>
  )
}

export default App
