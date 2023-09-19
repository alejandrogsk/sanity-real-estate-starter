import Image from 'next/image'
import React from 'react'

const PropertyFeatures = ({features}:{features:string[]}) => {
  return (
    <div className="bg-white py-12 px-8 ">
    <h2 className="text-xl font-medium">Featuresssss</h2>
    <div className="text-sm grid grid-cols-2 md:grid-cols-4 gap-2 pt-6 mt-2 border-t-[1px] border-gray-200 gap-y-3">
        {features.map((feature: string, idx) => (
            <div
                key={`${feature}-${idx}`}
                className="flex gap-2"
            >
                <Image
                    src="/icons/CheckYellow.svg"
                    alt="Bed icon"
                    width={16}
                    height={16}
                />{" "}
                <p>{feature}</p>
            </div>
        ))}
    </div>
</div>
  )
}

export default PropertyFeatures