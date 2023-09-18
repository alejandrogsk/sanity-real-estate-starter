import builder from '@/sanity/config/image-builder-config'
import { FeaturedImage } from '@/types/FeaturedImage'
import Image from 'next/image'
import React from 'react'
import { Image as SanityImageType } from 'sanity'

const PropertyImages = ({featuredImage, images, title}: {featuredImage: FeaturedImage, images: SanityImageType[]|undefined, title:string}) => {
    const { asset, alt } = featuredImage;
    return (
    <div>
                        <Image
                            src={builder.image(asset._ref).url()}
                            alt={alt}
                            width={1500}
                            height={1100}
                            className="w-full h-auto rounded-tr-0 md:rounded-tr-[5rem]"
                        />

                        {
                           (images && Array.isArray(images)) &&
                        <div className="flex gap-4 mt-6">
                            {images.map((imag, i) => {
                                if(!imag.asset) return null
                                return(<Image
                                    width={120}
                                    height={120}
                                    src={builder.image(imag.asset._ref).url()}
                                    alt={`${title} image n° ${i}`}
                                    className="rounded-tr-0 md:rounded-tr-[1.5rem]"
                                />)
                            })}
                        </div>
                        }
                    </div>
  )
}

export default PropertyImages