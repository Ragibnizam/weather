import React from 'react'

export const
 Temp = ({InputDataChange, inputData,cityName,temperature}) => {
  return (
    <div className=''>
        <div className="flex">
            <input onChange={InputDataChange} value={inputData} className='p-3 bg-slate-600  placeholder:text-white placeholder:italic  focus:outline-none' type='text' placeholder='Enter The City Name'/>
            <div className=" text-2xl m-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
               </svg>
            </div>
        </div>
        <div className="my-5 flex justify-center">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
           <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
         </svg>
        </div>

        <div className=" flex justify-center">
            <h1 className='text-2xl'>{temperature? temperature.temp_c : " "}°</h1>  
        </div>
        <div className=" flex justify-center m-3"> <p>Mist</p></div>
        <div className=" flex justify-center"><p>{cityName ?cityName.localtime :''} | {cityName  ? cityName.name : " "} </p></div>

    </div>
  )
}
