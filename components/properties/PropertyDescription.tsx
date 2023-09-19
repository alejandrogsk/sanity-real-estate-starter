import { PortableText } from '@portabletext/react'
import React from 'react'
import { TypedObject } from 'sanity'

const PropertyDescription = ({description}:{description: TypedObject | TypedObject[]}) => {
  return (
    <div className="bg-white py-12 px-8 ">
                        <h2 className="text-xl font-medium">Description</h2>
                        <div className="text-sm flex flex-col gap-2 pt-6 mt-2 border-t-[1px] border-gray-200">
                            <PortableText value={description} />
                        </div>
                    </div>
  )
}

export default PropertyDescription