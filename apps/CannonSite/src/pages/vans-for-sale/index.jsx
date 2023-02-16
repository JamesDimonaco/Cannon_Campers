import React, { Fragment, useState } from 'react'
import { Footer } from '@/components/Footer';
import { Cards } from '@/components/Cards'
import { Header } from '@/components/Header'
import clsx from 'clsx'
import fetcher from 'lib/fetcher';
export default function VansForSale({res}) {

  return (
    <Fragment>
    <Header />
    <div >
        <Cards />
    </div>
    <Footer/>
    </Fragment>
  )
}