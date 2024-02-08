import React from 'react'

interface ComicTagProps{
    name:string;
}
const ComicTag : React.FC<ComicTagProps> = ({name}) => {
  return (
    <div className='p-2 bg-green-100 rounded-md flex items-center justify-center'>{name}</div>
  )
}

export default ComicTag