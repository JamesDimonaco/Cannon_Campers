import React, { useState } from 'react'

export const Gallery = () => {
  const images = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
  ]

  return (
    <div className="grid grid-cols-4 gap-4">
      {images.map((image, index) => (
        <img 
          key={image}
          src={image}
          className="object-cover h-64 w-full"
        />
      ))}
    </div>
  )
}
