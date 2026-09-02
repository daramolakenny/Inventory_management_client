
import React from 'react'

const Card = ({ img, name, text }) => {

  return (
    <div className='rounded-md block relative p-0.5 md:max-[20rem] py-4'>
        <div className="items-center justify-center text-center pb-2">
          <img src={img} alt="icon" />
          <div>
            <header
              className=''
            >{name}</header>
            <p>{text}</p>
          </div>
        </div>
    </div>
  )
}

export default Card

{/*<div className='item-center justify-center text-center pb-2'>
            {icon}
            <header className="text-center text-[#1A1A1A] pb-2 text-[20px] font-bold">{title}</header>
            <p className="text-[16px] px-4">
              {description}
            </p>
        </div>
    </div> */}