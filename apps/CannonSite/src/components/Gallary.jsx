import React, { Fragment, useState } from 'react'
import Image from 'next/image'

export const Gallery = ({ images, setOpen, open }) => {
  const [selectedImage, setSelectedImage] = useState(null)

  function handleOpenModal(image) {
    setSelectedImage(image)
    setOpen(true)
  }

  function handleCloseModal() {
    setOpen(false)
  }
  return (
    <Fragment>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5 py-20">
        {images.map((image) => (
          <Image
            width={200}
            height={200}
            key={image.id}
            src={image.attributes.url}
            className="h-64 w-full object-cover"
            onClick={() => handleOpenModal(image)}
          />
        ))}
      </div>
      {open && (
        <div className="fixed top-0 left-0 h-full w-full bg-black bg-opacity-75 z-10"
        onClick={handleCloseModal}
        >
          <div className="flex justify-center align-middle h-screen">
            <Image
              width={selectedImage.attributes.width}
              height={selectedImage.attributes.height}
              src={selectedImage.attributes.url}
              className="max-h-fit max-w-3xl object-contain"
            />
          </div>
        </div>
      )}
    </Fragment>
  )
}
