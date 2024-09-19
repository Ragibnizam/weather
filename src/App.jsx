
import { useEffect, useState } from 'react'
import './App.css'
import { Hightlights } from './Component/Hightlights'
import { Temp } from './Component/Temp'


function App() {
  const[input,setInut]=useState('Araria')
  const[city,setCity]=useState([])
  const[temperature,setTemperature]=useState([])



useEffect(()=>{
    fetch(`https://api.weatherapi.com/v1/current.json?key=06ac68d4f3dd48a3b56125604242802&q=${input}&aqi=no`)
    .then(response => response.json())
        .then(data => {

           if(data.current && data.location){
            setCity(data.location)
            setTemperature(data.current )
          }
          
        

        })
  },[input])

  const InputDataChange=(e)=>{
    setInut(e.target.value)
    console.log(input)

  }

  return (
   <>
  <div className="bg-slate-900	 place-items-center min-h-[100vh] text-white flex justify-center" >
  <Temp  InputDataChange={ InputDataChange} inputData={input} cityName={city} temperature={temperature}/>
  <Hightlights temperature={temperature}/>
    
  </div>
  
   </>
  )
}

export default App
