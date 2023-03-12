import React, { Fragment, useState } from 'react'
import { Footer } from '@/components/Footer';
import { Cards } from '@/components/Cards'
import { Header } from '@/components/Header'
import clsx from 'clsx'
import fetcher from '@/lib/fetcher';
export default function VansForSale({data}) {

  return (
    <Fragment>
    <Header />
        <Cards data={data}/>
    <Footer/>
    </Fragment>
  )
}


// serverside props

export async function getServerSideProps() {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN
  const url = process.env.NEXT_PUBLIC_STRAPI_URL;
  const endpoints = ['vans-for-sales?populate=*']
  const res = await fetcher(url, endpoints, token)

  const data = res[0][1].data
  return {
    props: {
      data
    }
  }
}


