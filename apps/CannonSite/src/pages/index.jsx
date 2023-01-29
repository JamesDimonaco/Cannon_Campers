import Head from 'next/head'

import fetcher from 'lib/fetcher'
import { Author } from '@/components/Author'
import { Footer } from '@/components/Footer'
import { FreeChapters } from '@/components/FreeChapters'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { NavBar } from '@/components/NavBar'
import { Pricing } from '@/components/Pricing'
import { Resources } from '@/components/Resources'
import { Screencasts } from '@/components/Screencasts'
import { Conversations } from '@/components/Conversations'
import { Testimonial } from '@/components/Testimonial'
import { Testimonials } from '@/components/Testimonials'
import { Map } from '@/components/Map'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'
import axios from 'axios'

export default function Home({res}) {

  const introductionData = res.filter((item => item[0] === "introduction"))[0][1].data
  const heroData = res.filter((item => item[0] === "hero"))[0][1].data.attributes
  const navBarData = res.filter((item => item[0] === "nav-bar"))[0][1].data.attributes.nav_sections.data
  const conversationsData = res.filter((item => item[0] === "conversation-package"))[0][1].data
  const galleryData = res.filter((item => item[0] === "gallery-pages"))[0][1].data



  // const conversationsPackageData = conversationsData.attributes.packages.data.map((item) => {
  //   return {
  //     id: item.id,
  //     heading: item.attributes.heading,
  //     point1: item.attributes.point1,
  //     point2: item.attributes.point2,
  //     point3: item.attributes.point3,
  //   }
  // })
  
  const formatNavBarData = navBarData.map((item) => {
    return {
      id: item.id,
      title: item.attributes.desktopTitle,
      mobileTitle: item.attributes.mobileTitle,
      href: item.attributes.href
    }
  })
  // nav bar 
  // console.log(res.filter((item => item[0] === "introduction")));

  return (
    <>
      <Head>
        <title>
          Everything Starts as a Square - Get lost in the world of icon design
        </title>
        <meta
          name="description"
          content="A book and video course that teaches you how to design your own icons from scratch. "
        />
      </Head>
      <Hero data={heroData}/>
      <Introduction data={introductionData}/>
      <NavBar data={formatNavBarData} />
      <Conversations data={conversationsData}/>
      <Testimonial
        
        id="testimonial-from-tommy-stroman"
        author={{
          name: 'Tommy Stroman',
          role: 'Front-end developer',
          image: avatarImage1,
        }}
      >
        <p>
          “I didn’t know a thing about icon design until I read this book. Now I
          can create any icon I need in no time. Great resource!”
        </p>
      </Testimonial>
      {/* <Screencasts /> */}
      {/* <Testimonial
        id="testimonial-from-gerardo-stark"
        author={{
          name: 'Gerardo Stark',
          role: 'Creator of Pandemicons',
          image: avatarImage2,
        }}
      >
        <p>
          “I’ve tried to create my own icons in the past but quickly got
          frustrated and gave up. Now I sell my own custom icon sets online.”
        </p>
      </Testimonial> */}
      <Resources data={galleryData} />
      {/* <FreeChapters /> */}
      <Pricing />
      <Testimonials />
      <Map />
      {/* <Author /> */}
      <Footer />
    </>
  )
}


export async function getServerSideProps(context) {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN
  const url = process.env.NEXT_PUBLIC_STRAPI_URL;
  const endpoints = ['testimonials', 'introduction', 'hero', 'nav-bar', 'conversation-package', 'gallery-pages']
  const res = await fetcher(url, endpoints, token)


  return {
    props: {res}, 
  }
}