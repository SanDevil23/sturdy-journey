import React from 'react'

const InventoryManager = () => {
  return (
    <div className=''>

    <div className='grid grid-cols-2 p-20'>
            <div className='text-cyan-50'>
                <p className='mt-4 md:mt-8 lg:mt-12 text-left text-2xl font-extralight text-slate-400'>Business Dashboard</p>
                <p className='mt-4 md:mt-8 lg:mt-12 text-left text-6xl font-semibold'>Inventory Manager</p>
                <p className='mt-4 md:mt-8 lg:mt-12 text-left text-xl font-medium'></p>

                <p className='mt-4 md:mt-8 lg:mt-12 text-left text-lg font-medium'><b>Built With : </b>ReactJS,NodeJS ExpressJS, CSS, Postgres, MongoDB,  </p>
                
                <br />
                <div className=''>
                  <button className='bg-teal-800 rounded-md p-2 hover:bg-teal-600 font-mono mr-2'><a href="https://sandevil23.github.io/starbucks_landingpage/">View Webpage</a></button>
                  <button className='bg-green-800 rounded-md p-2 hover:bg-lime-600 font-mono'><a href="https://github.com/SanDevil23/starbucks_landingpage">View the Code</a></button>
              
                </div>
            </div>

            <div>
                {/* image */}
                <img src="https://www.inetsoft.com/images/screenshots/inventory_reporting_dashboard.jpg" alt="" />
            </div>

        </div>
      
      
    </div>

  )
}

export default InventoryManager
