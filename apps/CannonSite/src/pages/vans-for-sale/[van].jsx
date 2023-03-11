
import React, { Fragment, useState } from 'react'
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header'
import { FeaturedCard } from '@/components/FeaturedCard';
import fetcher from 'lib/fetcher';

export default function VanPage({data}) {

    const formatVanData = (van) => {
        const {title, price, frontImage, images, colors, description, features} = van

        const mergeImages = () => {
            return [frontImage.data, ...images.data]
        }
        mergeImages()

        return {
            name: title,
            price,
            description: `<p>${description}</p>`,
            images : mergeImages(),
            details: features,

        }
    }

    return (
        <Fragment>
        <Header />
        <FeaturedCard van={formatVanData(data.attributes)}/>
        <Footer/>
        </Fragment>
    )
}


export async function getStaticProps({ params }) {
    const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN
    const url = process.env.NEXT_PUBLIC_STRAPI_URL;
    const endpoints = [`vans-for-sales/${params.van}?populate=deep`]
    const res = await fetcher(url, endpoints, token)
    const data = res[0][1].data

  return {
    props: {data}, 
  }
}

export async function getStaticPaths(context) {
    const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN
    const url = process.env.NEXT_PUBLIC_STRAPI_URL;
    const endpoints = ['vans-for-sales']
    const res = await fetcher(url, endpoints, token)
  
    const paths = res[0][1].data.map((van) => ({
      params: { van: van.id.toString()},
    }))
  
    
    return { paths, fallback: false }
  }