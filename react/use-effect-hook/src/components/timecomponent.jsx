import React,{useState , useEffect} from 'react'

function TimeComponent(){
    const [sec, setSec]= useState(0);

    useEffect(() =>{
       const intervalId = setInterval(() => {
        setSec(prevSeconds => prevSeconds+1);
       },1000);

       return ()=> {
        clearInterval(intervalId);
       };
    },[]);
    return (
        <div>
            <h1>seconds:  {sec} </h1>           
        </div>
    )
}

export default TimeComponent