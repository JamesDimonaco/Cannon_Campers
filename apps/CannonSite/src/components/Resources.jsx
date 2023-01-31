import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import abstractBackgroundImage from '@/images/resources/abstract-background.png'
import discordImage from '@/images/resources/discord.svg'
import figmaImage from '@/images/resources/figma.svg'
import videoPlayerImage from '@/images/resources/video-player.svg'

export function Resources({ data }) {
  console.log(data[0].attributes)
  return (
    <section
      id="galleries"
      aria-labelledby="resources-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="3" id="resources-title">
          Galleries
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Checkout our galleries
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Lots more images will be here, this is just a template
        </p>
      </Container>
      <Container size="lg" className="mt-16">
        <ol
          role="list"
          className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20"
        >
          {data.map((resource) => (
            <Link href={`/gallery/${resource.attributes.Gallery_number}`}>
              <li
                key={resource.id}
                className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12"
              >
                <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-60 lg:h-40">
                  <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
                    <Image
                      width={350}
                      height={200}
                      src={resource.attributes.Images.data[0].attributes.url}
                      alt=""
                    />
                  </div>{' '}
                </div>
                <div>
                  <h3 className="text-base font-medium tracking-tight text-slate-900">
                    {resource.attributes.Title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {resource.attributes.Description}
                  </p>
                </div>
              </li>
            </Link>
          ))}
        </ol>
      </Container>
    </section>
  )
}
