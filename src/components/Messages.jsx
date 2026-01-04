import React from 'react'
import { FaUser } from 'react-icons/fa6'

function Messages() {
  return (
    <div className='p-3'>
      <div>
        <p className="text-3xl text-blue-950">Messages</p>
      </div>
      <div className='bg-blue-950 p-3 rounded-2xl mt-5'>
          <div className='bg-blue-900 shadow-sm shadow-gray-500 rounded-2xl p-2.5 mb-4'>
              <p>John: HHAAAAAAHAHAAHA</p>
          </div>
          <div className='bg-blue-900 shadow-sm shadow-gray-500 rounded-2xl p-2.5 mb-4'>
              <p>Jane: Helllooo</p>
          </div>
          <div className='bg-blue-900 shadow-sm shadow-gray-500 rounded-2xl p-2.5 mb-4'>
              <p>Eren: What's up</p>
          </div>
      </div>
    </div>
  )
}

export default Messages
