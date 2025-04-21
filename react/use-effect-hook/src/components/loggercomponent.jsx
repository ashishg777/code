import React,{useState , useEffect} from 'react'

function LoggerComponent(){
    const [count, setCount]= useState(0);

    useEffect(() =>{
        console.log('componet rendered',count);
    });
    return (
        <div>
            <h1>count:  {count} </h1>
            <button onClick={() => {setCount(count+1)}}>increment </button>
        </div>
    )
}

export default LoggerComponent
