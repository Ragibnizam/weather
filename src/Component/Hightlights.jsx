import React from 'react'

export const Hightlights = ({temperature}) => {
  return (
    <div className=''>
        <h1>Today Weather</h1>
        <div className="m-3 flex">
        <div className="bg-slate-600 m-2  h-[20vh] w-[25vh]  flex justify-center">
              <div className="text-center">
                <p className='m-2 '>wind Status</p>
                <p className='m-2'><span className='text-2xl'>{temperature ? temperature.wind_mph : " "}</span>mph</p>
                <p className="m-2 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                    </svg>
                </p>
              </div>
            </div> 
            
            <div className="bg-slate-600 m-2 h-[20vh] w-[25vh]  flex justify-center">
              <div className="text-center">
                <p className='m-2 '>Humidity </p>
                <div className='m-2'>
                    <span className='text-2xl'>{temperature ?temperature.humidity : " "} %</span>
                    <div className="relative pt-1">
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-500">
                      </div>
                    </div>
                </div>

              </div>
            </div>
        </div>
        
        <div className="m-3 flex">
        <div className="bg-slate-600 m-2  h-[15vh] w-[25vh]  flex justify-center">
              <div className="text-center">
                <p className='m-2 '>Visibilty</p>
                <p className='m-2'><span className='text-2xl'>{ temperature ? temperature.vis_miles : " "}</span> miles</p>
              </div>
            </div> 
            
            <div className="bg-slate-600 m-2 h-[15vh] w-[25vh]  flex justify-center">
              <div className="text-center">
                <p className='m-2 '>Air Pressure </p>
                <p className='m-2'><span className='text-2xl'>{temperature ? temperature.pressure_mb :" "} </span>mp</p>
                
              </div>
            </div>
        </div>
    </div>
  )
}
