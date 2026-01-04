import React from 'react'

function Notification() {
  return (
    <div className='p-3'>
      <div>
        <p className="text-3xl text-blue-950">Notifications</p>
      </div>
      <div className='bg-blue-950 p-3 rounded-2xl mt-5'>
          <div className='bg-blue-900 shadow-sm shadow-gray-500 rounded-2xl p-2.5 mb-4'>
              <p>You have 2 new messages</p>
          </div>
          <div className='bg-blue-900 shadow-sm shadow-gray-500 rounded-2xl p-2.5 mb-4'>
              <p>You have a new folder</p>
          </div>
          
      </div>
    </div>
  )
}

export default Notification
