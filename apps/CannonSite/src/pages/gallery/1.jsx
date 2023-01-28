
import React, { Fragment, useState } from 'react'
import { Footer } from '@/components/Footer';
import { Gallery } from '@/components/Gallary'
import { Header } from '@/components/Header'
import clsx from 'clsx'
import fetcher from 'lib/fetcher';
export default function GalleryPage({res}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Fragment>
    <Header />
    <div className={clsx(isOpen ? 'overflow-hidden' : '','p-5 ')}>
      <Gallery open={isOpen} setOpen={(e) => setIsOpen(e)} images={res[0][1].data.attributes.images.data} />
    </div>
    <Footer/>
    </Fragment>
  )
}

export async function getServerSideProps(context) {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN
  const url = process.env.NEXT_PUBLIC_STRAPI_URL;
  const endpoints = ['gallery']
  const res = await fetcher(url, endpoints, token)


  return {
    props: {res}, 
  }
}