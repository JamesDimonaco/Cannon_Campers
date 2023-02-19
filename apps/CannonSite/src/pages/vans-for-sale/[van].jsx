
import React, { Fragment, useState } from 'react'
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header'
import { FeaturedCard } from '@/components/FeaturedCard';

import clsx from 'clsx'
import fetcher from 'lib/fetcher';

export default function VanPage({data}) {
    console.log(data);

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

    

    const van = {
      name: 'Zip Tote Basket',
      price: '$140',
      rating: 4,
      images: [
        {
          id: 1,
          name: 'Angled view',
          src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
          alt: 'Angled front view with bag zipped and handles upright.',
        },
        // More images...
      ],
      description: `
        <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
      `,
      details: [
        {
          name: 'Features',
          items: [
            'Multiple strap configurations',
            'Spacious interior with top zip',
            'Leather handle and tabs',
            'Interior dividers',
            'Stainless strap loops',
            'Double stitched construction',
            'Water-resistant',
          ],
        },
        // More sections...
      ],
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
    const endpoints = [`vans-for-sales/${params.van}?populate=*`]
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