import React from 'react'

interface Props {
    text: string;
    width: string;
    height: string;
}

 const Button: React.FC<Props> = ( {text, width, height} ) => {
  return (
    <button className='primary hover:bg-lime-500 rounded-3xl' style={{width: width, height: height}}>{text}</button>
  )
}

export default Button;