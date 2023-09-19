import builder from "@/sanity/config/image-builder-config"
import { Property } from "@/types/Property"
import Image from "next/image"
import Link from "next/link"

const PropertyCard = ({property}: {property:Property}) => {
    return(
      <li className='bg-white relative  w-full flex flex-col'>
      <Link aria-label="go to the page" href={`/properties/${property.slug}`} className='absolute top-0 left-0 right-0 bottom-0 cursor-pointer'></Link>
    {
      property?.featuredImage &&
    <Image alt="Some alt" width={500} height={500} className=' w-full h-auto max-h-[328px]' src={builder.image(property?.featuredImage).url()}/>
    }
  
    <h3 className='px-4 font-medium  my-3 text-base lg:text-[1.2rem]'>{property.title}</h3>
    <div className='mt-auto grid grid-cols-3  px-4 font-medium  border-t-[1px] border-gray-200 font-sm'>
      <div className='py-4 flex gap-2'><Image src="/icons/Bed.svg" alt='Bed icon' width={16} height={16} /> <span>{property?.bedrooms}</span></div>
      <div className='py-4 flex justify-center gap-2 border-gray-200 border-x-[1px]'><Image src="/icons/Shower.svg" alt='Bed icon' width={16} height={16} /> <span>{property?.bathrooms}</span></div>
      <div className='py-4 flex gap-2 justify-self-end'><Image src="/icons/Size.svg" alt='Bed icon' width={16} height={16} /> <span>{property?.squareFeet}ft2</span></div>
    </div>
  </li>
  )
  }

  export default PropertyCard