
import React from 'react'

const Card = ({ name, description }) => {

  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
      
      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-100 text-blue-800 font-bold mb-4">
        M
      </div>

      <h3 className="text-lg font-semibold text-gray-900">
        {name}
      </h3>

      <p className="text-gray-600 mt-2 leading-6">
        {description}
      </p>

    </div>
  )
}

export default Card