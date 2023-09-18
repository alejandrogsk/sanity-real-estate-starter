import ProperiesGrid from '@/components/ProperiesGrid';
import Filter from '@/components/properties/Filter';
import { getProperties } from '@/sanity/sanity-utils';
import { Property } from '@/types/Property';
import filterOperations from '@/utils/filterFunction';
import React from 'react'

type FilterOptions = {
  operation:string|string[]|undefined,
}

async function getData({operation}:FilterOptions):Promise<Property[]|null>{
  console.log('My Operations: ', operation)
  /*
    Example
    Operation = ['forRent', 'forSale']
    Min Price = 4000
    Max Price = 10000
    yearOfConstruction = 2000-09-23
    Number of Bedrooms = 4
    Number of Bathrooms = undefined

    I need to pass this to my query
  */
  const opFilterString = filterOperations(operation)
  console.log('opFilterString: ', opFilterString)
  const properties = await getProperties(opFilterString)

  return properties
}




export default async function Page({searchParams}:{searchParams: { [key: string]: string | string[] | undefined }}) {

  console.log('Search Params: ', searchParams)
  const { operation } = searchParams;
  const properties = await getData({operation})
  
  return (
    <main className='grid grid-cols-1 xl:grid-cols-[300px_1fr]'>
        <aside className='hidden xl:block relative'>
           <Filter />
        </aside>
        <div>
          <div className='px-8 py-12 bg-gray-700 flex items-end h-[16.5rem] lg:h-[28rem]'>
            <h1 className='text-white text-3xl font-semibold'>Find your dream home</h1>
          </div>

          {
            (Array.isArray(properties) && properties.length>=1)&&
            <ProperiesGrid  properties={properties} />
          }
        
        </div>
    </main>
  )
}