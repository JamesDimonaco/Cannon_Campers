import React, { Fragment, useState } from 'react'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { FeatureContent } from './FeatureContent'
import {
  ArrowRightCircleIcon,
  ArrowLeftCircleIcon,
} from '@heroicons/react/24/outline'

import Slider from 'react-slick'

export const Carousel = ({ data }) => {
  console.log(data, 'carousel')
  const [componentsToRender, setComponentsToRender] = useState([])
  const { autoPlay, conversions, autoPlayIntervalInSeconds } = data.attributes
  const DEFAULT_AUTOPLAY_INTERVAL = 30 * 1000
  const autoPlayInterval = !autoPlayIntervalInSeconds
    ? DEFAULT_AUTOPLAY_INTERVAL
    : autoPlayIntervalInSeconds * 1000

  function SampleNextArrow(props) {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: 'red' }}
        onClick={onClick}
      />
    )
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ArrowRightCircleIcon />,
    prevArrow: <ArrowLeftCircleIcon />,
    autoplaySpeed: autoPlayInterval,
    autoplay: autoPlay,
  }

  const getComponentsToRender = () => {
    let components = []

    conversions.map((item, index) => {
      let element = (
        <FeatureContent
          features={item.features}
          key={index}
          title={item.title}
          description={item.description}
          image={item.image.data.attributes.url}
        />
      )

      components.push(element)
    })
    setComponentsToRender(components)
  }

  if (componentsToRender.length === 0) {
    getComponentsToRender()
  }

  return (
 
      <Container className={'py-24 sm:py-32'} size='lg'>
        <SectionHeading number="1" id={data.attributes.title}>
          {data.attributes.title}
        </SectionHeading>
        <Slider {...settings}>{componentsToRender}</Slider>
      </Container>

  )
}
