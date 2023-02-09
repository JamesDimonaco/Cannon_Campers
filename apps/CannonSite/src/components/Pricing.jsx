import { Fragment, useState } from 'react'
import clsx from 'clsx'
import { Button } from '@/components/Button'
import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'
import { GridPattern } from '@/components/GridPattern'
import { SectionHeading } from '@/components/SectionHeading'

function Plan({ name, description, price, features, href, featured, buttonText }) {
  const [loadMore, setLoadMore] = useState(false)
  return (
    <div
      className={clsx(
        'relative px-4 py-16 sm:rounded-5xl sm:px-10 md:py-12 lg:px-12',
        featured && 'bg-blue-600 sm:shadow-lg'
      )}
    >
      {featured && (
        <div className="absolute inset-0 text-white/10 [mask-image:linear-gradient(white,transparent)]">
          <GridPattern x="50%" y="50%" />
        </div>
      )}
      <div className="relative flex flex-col">
        <h3
          className={clsx(
            'mt-7 text-lg font-semibold tracking-tight',
            featured ? 'text-white' : 'text-slate-900'
          )}
        >
          {name}
        </h3>
        <p
          className={clsx(
            'mt-2 text-lg tracking-tight',
            featured ? 'text-white' : 'text-slate-600'
          )}
        >
          {description}
        </p>
        <span className="order-first font-display font-bold">Prices from</span>

        <p className="order-first flex font-display font-bold">
          <span
            className={clsx(
              'text-[1.75rem] leading-tight',
              featured ? 'text-blue-200' : 'text-slate-500'
            )}
          >
            £
          </span>
          <span
            className={clsx(
              'ml-1 mt-1 text-7xl tracking-tight',
              featured ? 'text-white' : 'text-slate-900'
            )}
          >
            {price.toLocaleString()}
          </span>
        </p>
        <div className="order-last mt-8">
          <ul
            role="list"
            className={clsx(
              '-my-2 divide-y text-base tracking-tight',
              featured
                ? 'divide-white/10 text-white'
                : 'divide-slate-200 text-slate-900'
            )}
          >
            {features.map((feature, i) => (
              <Fragment>
                {i > 3 && !loadMore ? null : (
                  <li key={i} className="flex py-2">
                    <CheckIcon
                      className={clsx(
                        'h-8 w-8 flex-none',
                        featured ? 'fill-white' : 'fill-slate-600'
                      )}
                    />
                    <span className="ml-4">{feature}</span>
                  </li>
                )}
              </Fragment>
            ))}
            {features.length > 3 && !loadMore ? (
              <Button
                color={featured ? 'white' : 'slate'}
                key="load-more"
                type="button"
                className="flex w-full items-center justify-center rounded-md py-2 text-sm font-medium   focus:outline-none focus-visible:ring-2  focus-visible:ring-offset-2"
                onClick={() => setLoadMore(true)}
              >
                Load more
              </Button>
            ) : features.length > 3 && loadMore ? (
              <Button
                color={featured ? 'white' : 'slate'}
                key="load-less"
                type="button"
                className="flex w-full items-center justify-center rounded-md py-2 text-sm font-medium   focus:outline-none focus-visible:ring-2  focus-visible:ring-offset-2"
                onClick={() => setLoadMore(false)}
              >
                Load less
              </Button>
            ) : null}
          </ul>
        </div>
        <Button
          href={href}
          color={featured ? 'white' : 'slate'}
          className="mt-8"
          aria-label={`Get started with the ${name} plan for $${price}`}
        >
          {!buttonText ? 'Contact us' : buttonText}
        </Button>
      </div>
    </div>
  )
}

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="scroll-mt-14 pt-16 pb-8 sm:scroll-mt-32 sm:pt-20 sm:pb-10 lg:pt-32 lg:pb-16"
    >
      <Container>
        <SectionHeading number="4" id="pricing-title">
          Pricing
        </SectionHeading>
        <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
          Pick your package
        </p>
        <p className="mt-4 max-w-xl text-lg tracking-tight text-slate-600">
          “Everything Starts as a Square” is available in two different packages
          so you can pick the one that’s right for you.
        </p>
      </Container>
      <div className="mx-auto mt-16 max-w-5xl lg:px-6">
        <div className="grid bg-slate-50 sm:px-6 sm:pb-16 md:grid-cols-2 md:rounded-6xl md:px-8 md:pt-16 lg:p-20">
          <Plan
            name="Conversions"
            description="The perfect starting point if you’re on a budget."
            price={10495}
            href="#"
            features={[
              'The 240-page ebook',
              'Figma icon templates',
              'Community access',
              'Email support',
              '1 year of updates',
              '1 year of updates',
              '1 year of updates',
            ]}
          />
          <Plan
            featured
            buttonText='See available vans'
            name="Vans for sale"
            description="Brand New Vans fully converted"
            price={47995}
            href="#"
            features={[
              '16in Alloy Wheels – Clayton',
              'ASR – Anti Slip Regulation',
              'Anti-theft Alarm System with Interior Monitoring in Cab – Backup Horn and Towing Protection',
              'Auto-Dimming Breakaway Interior Rearview Mirror',
              'Automatic Headlight Activation with Daytime Running Lights – Leaving Home – Manual Coming Home Function',
              'Cruise Control – Adaptive with Speed Limiter',
              'ESP – Electronic Stability Programme',
              'Front Fog Lights with Cornering Lights',
              'Halogen Twin Headlights',
              'Leather-Wrapped Multi-Function Steering Wheel',
              'Manual Sliding Door Passenger Side',
              'Parking Sensors – Front and Rear',
              'Servotronic Speed-Sensitive Power Steering – Steering Column Adjustable in Height and Reach',
              'Smartphone Interface',
            ]}
          />
        </div>
      </div>
    </section>
  )
}
