import { HomePageFeature } from '@/types/HomePage'
import { PortableText } from '@portabletext/react'
import clsx from 'clsx'
import React from 'react'

const OneColumCard = ({feature}: {feature: HomePageFeature}) => {
        return (

          <div className={clsx({
            'flex flex-col justify-center items-center p-2 md:p-36 text-center bg-black text-white w-full': true,
          })}>
              <h2 className='text-2xl font-medium mb-3'>{feature.title}</h2>
             <PortableText value={feature.content}/>
             <div className='flex mt-12'>
              {
                feature.links.map((link) => (
                  <button key={link._key} className='py-3 px-6 bg-white text-black'>{link.linkLabel}</button>
                ))
              }
             </div>
           </div>
        )
      }


export default OneColumCard