
import { Header } from '@/components/Header';
import React from 'react';
import News from '@/components/News';
import fetcher from '@/lib/fetcher';
export default function NewsPage({res}) {

  const newsData = res.filter((item => {
    let arr = item[0].split("?");
    arr.splice(1, arr.length - 1);
    return arr[0] === "newss";
  }))[0][1].data;

  return (
    <div className='p-4'>
    <Header />
    <News data={newsData} />
    </div>
  );
}


export async function getServerSideProps(context) {
    const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN
    const url = process.env.NEXT_PUBLIC_STRAPI_URL;
    const endpoints = ['newss?populate=*']
    const res = await fetcher(url, endpoints, token)
  
  
    return {
      props: {res}, 
    }
  }