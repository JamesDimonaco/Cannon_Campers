import Link from 'next/link'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'

export function Introduction({data}) {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pt-20 pb-16 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
        {data.attributes.title}
        </p>
        <p className="mt-4">
          {data.attributes.paragraph}
        </p>
        <p className="mt-4">
        {data.attributes.paragraph2}
        </p>
        <p className="mt-4">
        {data.attributes.paragraph3}
        </p>
        <ul role="list" className="mt-8 space-y-3">
        {data.attributes.list.points.map((feature) => (
            <li key={feature} className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8">
        {data.attributes.paragraph4}

        </p>
        <p className="mt-10">
          <Link
            href={data.attributes.linkHref ? data.attributes.linkHref : '/'}
            className="text-base font-medium text-blue-600 hover:text-blue-800"
          >
            {data.attributes.linkText}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Container>
    </section>
  )
}
