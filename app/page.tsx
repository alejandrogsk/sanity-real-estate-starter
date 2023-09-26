import { getPageBySlug, getPageMetadataBySlug, getProperties } from '@/sanity/sanity-utils'
import Image from 'next/image'
import clientConfig from '@/sanity/config/client-config';
import { HomePage, HomePageFeature } from '@/types/HomePage';
import TwoColumnsCard from '@/components/TwoColumnsCard';
import imageUrlBuilder from '@sanity/image-url'
import OneColumCard from '@/components/OneColumCard';
import ProperiesGrid from '@/components/properties/cards/ProperiesGrid';
const builder = imageUrlBuilder(clientConfig)

type SEO = {
  seoTitle: string,
  seoDescription: string
}

export async function generateMetadata() {
  const metadata = await getPageMetadataBySlug<{seo:SEO}>("homepage")
  const { seoTitle, seoDescription } = metadata.seo;  
  return {
    title: seoTitle ?? 'Homepage',
    description: seoDescription ?? 'Homepage'
  }
}
export default async function Home() {
  const page = await getPageBySlug<HomePage>("homepage");
  const { title, subtitle, featuredImage, features, featuredProperties  } = page;
  const firstElement:HomePageFeature|null = features.shift() ?? null

  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">

      {/**Hero */}
      <div 
      className='h-screen w-full bg-cover bg-no-repeat bg-center flex flex-col justify-center ' 
      style={{
        backgroundImage: `linear-gradient(108deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%), url(${builder.image(featuredImage.asset._ref).url()})`
      }}>
        <div className='w-full md:w-[80%] lg:w-[70%] text-white mx-2 md:mx-8 backdrop-blur-none	 md:backdrop-blur-sm	p-12'>
          <h1 className='text-2xl md:text-3xl lg:text-5xl font-medium uppercase'>{title}</h1>
          <p className='mt-6 text-base w-full md:w-[70%]'>{subtitle}</p>
        </div>
      </div>

          {/**Content */}
          {
            firstElement &&
            <TwoColumnsCard feature={firstElement} reverse={false} />
          }


          {/**Properties */}
          
        <ProperiesGrid 
          properties={featuredProperties.properties}
          title={featuredProperties.title}
        /> 


          {/**Content */}
          {
            features.map((feature, index) => {
              const idx = index % 2 === 0

              return feature.featuredImage?.asset?._ref
              ? <TwoColumnsCard feature={feature} reverse={idx} />
              : <OneColumCard  feature={feature}/>
            })
          }
        
    </main>
  )
}
