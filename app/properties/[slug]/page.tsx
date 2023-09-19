import { getPropertyBySlug } from "@/sanity/sanity-utils";
import React from "react";
import priceFormat from "@/utils/currencyFormat";
import RealtorCard from "@/components/properties/RealtorCard";
import ProperiesGrid from "@/components/properties/cards/ProperiesGrid";
import PropertyImages from "@/components/properties/PropertyImages";
import PropertyDetails from "@/components/properties/PropertyDetails";
import PropertyDescription from "@/components/properties/PropertyDescription";
import PropertyFeatures from "@/components/properties/PropertyFeatures";
export default async function Page({ params }: { params: { slug: string } }) {
    const data = await getPropertyBySlug(params.slug);
    const {
        title,
        description,
        featuredImage,
        address,
        rentPrice,
        isOnRent,
        isOnSale,
        salesPrice,
        images,
        features,
        bedrooms,
        bathrooms,
        garages,
        squareFeet,
        yearOfConstruction,
        relatedProperties,
        realtor
    } = data;
    return (
        <main >
            <div className="flex flex-col md:flex-row justify-between pt-28 pb-12 bg-black text-white px-2 md:px-8">
                <div>
                    <h1 className="text-3xl font-semibold">{title}</h1>
                    <span className="text-base text-gray-400">{address}</span>
                </div>

                <div>
                    {isOnSale && salesPrice && (
                        <h3 className="text-xl font-medium">
                            Sales Price: {priceFormat(salesPrice)}
                        </h3>
                    )}

                    {isOnRent && rentPrice && (
                        <h3 className="text-xl font-medium">
                            Rent Price: {priceFormat(rentPrice)}
                        </h3>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-3 md:gap-6 bg-gray-200 px-2 md:px-8 py-12 ">
              {/**Property */}
                <div className="grid grid-cols-1 gap-y-12">
                    {/**Images */}
                    <PropertyImages 
                    featuredImage={featuredImage}
                    images={images}
                    title={title}
                    />

                    <PropertyDetails 
                        bedrooms={bedrooms}
                        bathrooms={bathrooms}
                        garages={garages}
                        squareFeet={squareFeet}
                        yearOfConstruction={yearOfConstruction}
                    />

                    <PropertyDescription description={description}/>

                    {
                        Array.isArray(features) ?? 
                        <PropertyFeatures features={features} />
                    }
                </div>

                {/**Agent */}
                <div>
                    <RealtorCard realtor={realtor} />
                </div>
            </div>
            
            {/**Related Properties */}
            {
               ( Array.isArray(relatedProperties) && relatedProperties.length > 0) &&
               <ProperiesGrid
               properties={relatedProperties}
               title="Similar Listings"
               />
            }

        </main>
    );
}
