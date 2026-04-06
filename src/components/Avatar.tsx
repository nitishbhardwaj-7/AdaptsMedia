import React from 'react'

const Avatar = ({src}) => {
  return (
    <div className="w-12 h-12 rounded-full border-4 border-surface bg-surface-container overflow-hidden">
      <img className="w-full h-full object-cover" src={src} alt="" />
    </div>
  )
}

export default Avatar