import builder from '@/sanity/config/image-builder-config'
import { HomePageFeature } from '@/types/HomePage'
import Image from 'next/image'
import {PortableText} from '@portabletext/react'
import { clsx } from "clsx";
const TwoColumnsCard = ({feature, reverse=false}: {feature: HomePageFeature, reverse?: boolean}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 p-2 md:p-0 gap-4 md:gap-0'>
    <div className={clsx({
      'p-0 md:p-12': true,
      'order-2': reverse
    })}>
      <Image
        src={builder.image(feature.featuredImage.asset._ref).url()}
        alt={feature.featuredImage.alt}
        width={500}
        height={500}
        className={clsx({
          "w-full h-full ": true
        })}
      />
    </div>
    <div className={clsx({
      'flex flex-col justify-center': true,
      'pr-0 md:pr-12': !reverse,
      'pl-0 md:pl-12': reverse
    })}>
        <h2 className='text-2xl font-medium mb-3'>{feature.title}</h2>
       <PortableText value={feature.content}/>
       <div className='flex mt-12'>
        {
          feature.links.map((link) => (
            <button key={link._key} className='py-3 px-6 bg-black text-white'>{link.linkLabel}</button>
          ))
        }
       </div>
     </div>
  </div>
  )
}

export default TwoColumnsCard