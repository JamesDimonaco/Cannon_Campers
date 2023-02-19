
import React, { Fragment, useState } from 'react'
import { Footer } from '@/components/Footer';
import { Gallery } from '@/components/Gallary'
import { Header } from '@/components/Header'
import clsx from 'clsx'
import fetcher from 'lib/fetcher';
export default function GalleryPage({res}) {
  const [isOpen, setIsOpen] = useState(false)
console.log(res[0][1], 'res')

  return (
    <Fragment>
    <Header />
    <div className={clsx(isOpen ? 'overflow-hidden' : '','p-5 ')}>
      <Gallery open={isOpen} setOpen={(e) => setIsOpen(e)} images={res[0][1].data.attributes.Images.data} />
    </div>
    <Footer/>
    <h1>2</h1>
    </Fragment>
  )
}

export async function getStaticProps({ params }) {

    const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN
    const url = process.env.NEXT_PUBLIC_STRAPI_URL;
    const endpoints = [`gallery-pages/${params.gallery}?populate=*`]
    const res = await fetcher(url, endpoints, token)

  return {
    props: {res}, 
  }
}

export async function getStaticPaths(context) {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN
  const url = process.env.NEXT_PUBLIC_STRAPI_URL;
  const endpoints = ['gallery-pages']
  const res = await fetcher(url, endpoints, token)

  const paths = res[0][1].data.map((gallery) => ({
    params: { gallery: gallery.id.toString()},
  }))

  
  return { paths, fallback: false }
}