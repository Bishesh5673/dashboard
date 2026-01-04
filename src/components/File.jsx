import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { FaFolder } from 'react-icons/fa6'

function File() {
  return (
    <div className='p-3'>
      <div>
        <p className="text-3xl text-blue-950">Files</p>
      </div>
      <div className='flex justify-evenly bg-blue-900 p-3 mt-5 '>
          <div>
            <FaFolder size={100} className='text-yellow-600'/>
            <p className='text-white text-2xl '>Pictures</p>
          </div>
          <div>
            <FaFolder size={100} className='text-yellow-600'/>
            <p className='text-white text-2xl '>Videos</p>
          </div><div>
            <FaFolder size={100} className='text-yellow-600'/>
            <p className='text-white text-2xl '>Documents</p>
          </div>
      </div>
      <div>
        <button  className='bg-blue-900 m-5 h-16 rounded-3xl p-3 text-2xl flex items-center gap-3.5'>
          
            Upload a new file
            <FaPlus/>
        </button>
      </div>
    </div>
  )
}

export default File
