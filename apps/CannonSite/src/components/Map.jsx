import React, { useEffect, useState } from 'react'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'

export const Map = ({key}) => {
  const [scriptLoaded, setScriptLoaded] = useState(false)
  const mapApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  useEffect(() => {
    if (!scriptLoaded) {
      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=${mapApiKey}&libraries=places`
      script.async = true
      script.defer = true
      script.onload = () => {
        setScriptLoaded(true)
      }
      document.head.appendChild(script)
    }
  }, [scriptLoaded])

  useEffect(() => {
    if (scriptLoaded) {
      const mapContainer = document.getElementById('map')
      const options = {
        center: { lat: 51.850421827486684, lng: -3.135481988314359 }, // coordinates for your business location
        zoom: 15,
      }

      const map = new window.google.maps.Map(mapContainer, options)

    }
  }, [scriptLoaded])

  return (
    <section className='px-4 max-w-5xl mx-auto'>
      <Container className={'my-7'}>
        <SectionHeading number="5" id="visit-us">
          Visit us
        </SectionHeading>
        <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
          Come to our yard in Crickhowell
        </p>
        <p className="mt-4 max-w-xl text-lg tracking-tight text-slate-600">
          Things to do near Crickhowell
        </p>
      </Container>
      <div  id="map" style={{ height: '400px', width: '100%' }} />
    </section>
  )
}
