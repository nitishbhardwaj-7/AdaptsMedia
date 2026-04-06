import React from 'react'

const SectionTitle = ({title}) => {
  return (
    <div>
        <div className="flex items-center gap-4 mb-12">
      <div className="h-[1px] flex-grow bg-gray-300" />
      <h2 className="text-2xl font-bold px-4">{title}</h2>
      <div className="h-[1px] w-12 bg-blue-500" />
    </div>
    </div>
  )
}

export default SectionTitle