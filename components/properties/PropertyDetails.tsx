import Image from 'next/image'
import React from 'react'

type PropertyDetailsProps = {
    bedrooms: number, bathrooms: number, squareFeet: number, garages: number, yearOfConstruction:Date
}

const PropertyDetails = ({bedrooms, bathrooms, squareFeet, garages, yearOfConstruction}:PropertyDetailsProps) => {
  return (
    <div className="bg-white py-12 px-8 rounded-[2.5rem]">
                        <h2 className="text-xl font-medium">Details</h2>
                        <div className="text-sm grid grid-cols-2 md:grid-cols-5 gap-2 pt-6 mt-2 border-t-[1px] border-gray-200">
                            <div className="py-4 flex justify-center gap-2">
                                <Image
                                    src="/icons/Bed.svg"
                                    alt="Bed icon"
                                    width={16}
                                    height={16}
                                />{" "}
                                <span>{bedrooms ?? 0}</span>
                            </div>
                            <div className="py-4 flex justify-center gap-2 border-gray-200 md:border-x-[1px]">
                                <Image
                                    src="/icons/Shower.svg"
                                    alt="Bed icon"
                                    width={16}
                                    height={16}
                                />{" "}
                                <span>{bathrooms ?? 0}</span>
                            </div>
                            <div className="py-4 flex justify-center gap-2 ">
                                <Image
                                    src="/icons/Size.svg"
                                    alt="Bed icon"
                                    width={16}
                                    height={16}
                                />{" "}
                                <span>
                                    {squareFeet ? `${squareFeet}ft2` : "N/A"}
                                </span>
                            </div>
                            <div className="py-4 flex justify-center gap-2 border-gray-200 md:border-x-[1px]">
                                <Image
                                    src="/icons/Garage.svg"
                                    alt="Garage icon"
                                    width={16}
                                    height={16}
                                />{" "}
                                <span>{garages ?? 0}</span>
                            </div>
                            <div className="py-4 flex justify-center gap-2 ">
                                <Image
                                    src="/icons/Date.svg"
                                    alt="Garage icon"
                                    width={16}
                                    height={16}
                                />{" "}
                                <span>
                                    {new Date(
                                        yearOfConstruction
                                    ).getFullYear() ?? 0}
                                </span>
                            </div>
                        </div>
                    </div>
  )
}

export default PropertyDetails