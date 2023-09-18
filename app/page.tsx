import { getPageBySlug, getPageMetadataBySlug, getProperties } from '@/sanity/sanity-utils'
import Image from 'next/image'
import clientConfig from '@/sanity/config/client-config';
import { HomePage, HomePageFeature } from '@/types/HomePage';
import TwoColumnsCard from '@/components/TwoColumnsCard';
import imageUrlBuilder from '@sanity/image-url'
import OneColumCard from '@/components/OneColumCard';
import ProperiesGrid from '@/components/ProperiesGrid';
const builder = imageUrlBuilder(clientConfig)

type SEO = {
  seoTitle: string,
  seoDescription: string
}

export async function generateMetadata() {
  const metadata = await getPageMetadataBySlug<{seo:SEO}>("beautiful-homes-made-for-you")
  const { seoTitle, seoDescription } = metadata.seo;  
  return {
    title: seoTitle,
    description: seoDescription
  }
}
export default async function Home() {

  //const data = await getProperties();
  const page = await getPageBySlug<HomePage>("beautiful-homes-made-for-you");

  const { title, subtitle, featuredImage, features, featuredProperties  } = page;
  
  //Fetch Properties
  //console.log("featuredProperties", featuredProperties)

  const firstElement:HomePageFeature|null = features.shift() ?? null

  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">

      {/**Hero */}
      <div 
      className='h-screen w-full bg-cover bg-no-repeat bg-center flex flex-col justify-center ' 
      style={{
        backgroundImage: `linear-gradient(108deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%), url(${builder.image(featuredImage.asset._ref).url()})`
      }}>
        <div className='w-full md:w-1/2 text-white mx-2 md:mx-8'>
        <h1 className='text-4xl font-medium uppercase'>{title}</h1>
        <p className='mt-6'>{subtitle}</p>
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
