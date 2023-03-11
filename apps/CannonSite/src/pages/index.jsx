import Head from 'next/head'

import fetcher from 'lib/fetcher'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { NavBar } from '@/components/NavBar'
import { Pricing } from '@/components/Pricing'
import { Resources } from '@/components/Resources'
import { Carousel } from '@/components/Carousel'
import { Conversations } from '@/components/Conversations'
import { Testimonial } from '@/components/Testimonial'
import { Testimonials } from '@/components/Testimonials'
import { Map } from '@/components/Map'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import { Header } from '@/components/Header'

export default function Home({res}) {

   const introductionData = res.filter((item => {
    let arr = item[0].split("?");
    arr.splice(1, arr.length - 1);
    return arr[0] === "introduction";
  }))[0][1].data;
  const heroData = res.filter((item => {
    let arr = item[0].split("?");
    arr.splice(1, arr.length - 1);
    return arr[0] === "hero";
  }))[0][1].data.attributes
  const navBarData = res.filter((item => {
    let arr = item[0].split("?");
    arr.splice(1, arr.length - 1);
    return arr[0] === "nav-bar";
  }))[0][1].data.attributes.nav_sections.data
  const galleryData = res.filter((item => {
    let arr = item[0].split("?");
    arr.splice(1, arr.length - 1);
    return arr[0] === "gallery-pages";
  }))[0][1].data


const carouselData = res.filter((item => {
  let arr = item[0].split("?");
  arr.splice(1, arr.length - 1);
  return arr[0] === "carousel-homepage";
}))[0][1].data





  const formatNavBarData = navBarData.map((item) => {
    return {
      id: item.id,
      title: item.attributes.desktopTitle,
      mobileTitle: item.attributes.mobileTitle,
      href: item.attributes.href
    }
  })


  return (
    <>
      <Head>
        <title>
          Cannon Campers | The best camper van conversions in the UK
        </title>
        <meta
          name="description"
          content="A book and video course that teaches you how to design your own icons from scratch. "
        />
      </Head>
      <Header/>
      <Hero data={heroData}/>
      <Introduction data={introductionData}/>
      <NavBar data={formatNavBarData} />

      <Carousel data={carouselData} />
      <Testimonial
        
        id="testimonial-from-tommy-stroman"
        author={{
          name: 'Tommy Stroman',
          role: 'Front-end developer',
          image: avatarImage1,
        }}
      >
        <p>
          “Testimonial can go here or it can be removed ”
        </p>
      </Testimonial>
      <Resources data={galleryData} />


      <Pricing />
      <Testimonials />
      <Map />
      <Footer />
    </>
  )
}


export async function getServerSideProps(context) {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN
  const url = process.env.NEXT_PUBLIC_STRAPI_URL;
  const endpoints = ['testimonials?populate=*', 'introduction?populate=*', 'hero?populate=*', 'nav-bar?populate=*', 'gallery-pages?populate=*', 'carousel-homepage?populate=deep']
  const res = await fetcher(url, endpoints, token)


  return {
    props: {res}, 
  }
}