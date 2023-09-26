'use client'
import builder from '@/sanity/config/image-builder-config'
import { FeaturedImage } from '@/types/FeaturedImage'
import Image from 'next/image'
import {useState} from 'react'
import { Image as SanityImageType } from 'sanity'
import FsLightbox from "fslightbox-react";

const PropertyImages = ({featuredImage, images, title}: {featuredImage: FeaturedImage, images: SanityImageType[]|undefined, title:string}) => {
    const { asset, alt } = featuredImage;

    const [lightboxController, setLightboxController] = useState({
		toggler: false,
		slide: 1
	});

	function openLightboxOnSlide(number:number) {
		setLightboxController({
			toggler: !lightboxController.toggler,
			slide: number
		});
	}

    const fsImages = Array.isArray(images) ? images?.map((imag) => builder.image(imag.asset._ref).url()) : []
    fsImages.unshift(builder.image(asset._ref).url())
    return (
    <div className=''>
        <FsLightbox
				toggler={lightboxController.toggler}
				sources={fsImages}
				slide={lightboxController.slide}
			/>
            <Image
                src={builder.image(asset._ref).url()}
                alt={alt}
                width={1500}
                height={1100}
                className="w-full h-auto "
                onClick={()=>openLightboxOnSlide(1)}
            />
                        

                        {
                           (images && Array.isArray(images)) &&
                        <div className="flex gap-4 mt-6 max-w-screen overflow-x-hidden">
                            {images.map((imag, i) => {
                                if(!imag.asset) return null
                                return(<Image
                                    width={120}
                                    height={120}
                                    src={builder.image(imag.asset._ref).url()}
                                    alt={`${title} image n° ${i}`}
                                    className=""
                                    key={`${title}-image-n°-${i}`}
                                    onClick={()=>openLightboxOnSlide(i+2)}
                                />)
                            })}
                        </div>
                        }
                    </div>
  )
}

export default PropertyImages