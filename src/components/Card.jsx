
import React from 'react'

const Card = ({ img, name, text }) => {

  return (
    <div className='flex bg-white rounded shadow-md'>
        <div className="p-4 ">
            <img src={img} alt="icon" />
            <div></div>
        </div>
    </div>
  )
}

export default Card