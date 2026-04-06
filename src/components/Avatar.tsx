import React from 'react'

type AvatarProps = {
  src: string;
};

const Avatar = ({src}: AvatarProps) => {
  return (
    <div className="w-12 h-12 rounded-full border-4 border-surface bg-surface-container overflow-hidden">
      <img className="w-full h-full object-cover" src={src} alt="" />
    </div>
  )
}

export default Avatar