import Link from 'next/link'
import { currencyFormatter } from '../lib/currencyFormatter'

  
  
  export function Cards({data}) {


    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Vans for Sale</h2>
  
          <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
            {data.map((van) => (
              <div
                key={van.id}
                className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
              >
                <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
                  <img
                    src={van.attributes.frontImage.data.attributes.url}
                    className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                  />
                </div>
                <div className="flex flex-1 flex-col space-y-2 p-4">
                  <h3 className="text-sm font-medium text-gray-900">
                    <Link href={`vans-for-sale/${van.id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {van.attributes.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-500">{van.attributes.description}</p>
                  <div className="flex flex-1 flex-col justify-end">
                    <p className="text-sm italic text-gray-500">{van.attributes.options}</p>
                    <p className="text-base font-medium text-gray-900">{currencyFormatter.format(van.attributes.price)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  