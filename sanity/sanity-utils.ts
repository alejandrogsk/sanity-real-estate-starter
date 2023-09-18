import { createClient, groq } from "next-sanity";
import clientConfig from './config/client-config';
import { Property } from "@/types/Property";


export async function getProperties(filter?:string): Promise<Property[]> {
    return createClient(clientConfig).fetch(
      groq`*[_type == "property" ${filter??''} ]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        "featuredImage": featuredImage.asset,
        description,
        bedrooms,
        bathrooms,
        squareFeet,
      }`,
    )
}






export async function getPropertyBySlug(slug:string): Promise<Property> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "property" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      featuredImage,
      description,
      bedrooms,
      bathrooms,
      squareFeet,
      garages,
      mapLocation,
      images[]{
        "asset": asset
      },
      isOnSale,
      salesPrice,
      isOnRent,
      rentPrice,
      features,
      address,
      yearOfConstruction,
      relatedProperties[]->{
        _id,
        title,
        "slug": slug.current,
        "featuredImage": featuredImage.asset,
        bedroom,
        bathrooms,
        squareFeet
      },

      realtor->{
        name,
        lastName,
        phone,
        email,
        "profileImage": profileImage.asset,
      }
    }`,
    {slug}
  )
}






export async function getPageBySlug<T>(slug:string): Promise<T> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "homePage"  && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      featuredImage,
      features,
      subtitle,
      featuredProperties{
        title,
        properties[]->{
          _id,
          title,
          "slug": slug.current,
          "featuredImage": featuredImage.asset,
          bedroom,
          bathrooms,
          squareFeet
        }
      }
    }`,
    {slug}
  )
}

export async function getPageMetadataBySlug<T>(slug:string): Promise<T> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "homePage"  && slug.current == $slug][0]{
      seo
    }`,
    {slug}
  )
}