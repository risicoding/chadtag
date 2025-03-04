import React from 'react'

const GardientButton = ({children}:{children:React.ReactNode}) => {
  return (
  <button className='p-[2px]  gradient rounded-full animate-pulse'>
      <div className='bg-white px-4 py-2 rounded-full'>

{children}
      </div>
    </button>
  )
}

export default GardientButton
