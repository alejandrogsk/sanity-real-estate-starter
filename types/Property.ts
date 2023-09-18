import { Image, TypedObject } from "sanity";
import { Realtor } from "./Realtor";
import { FeaturedImage } from "./FeaturedImage";

export type Property = {
    _id: string;
    _createdAt: Date;
    title: string;
    slug: string;
    featuredImage: FeaturedImage;
    description: TypedObject | TypedObject[];
    bedrooms: number;
    bathrooms: number;
    squareFeet: number;
    garages: number;
    mapLocation?: GeoPoint;
    images?: Image[];
    isOnSale: boolean;
    salesPrice: number;
    isOnRent: boolean;
    rentPrice: number;
    features: string[];
    address: string;
    yearOfConstruction: Date;
    relatedProperties: Property[];
    realtor: Realtor;
};

export type GeoPoint = {
    lat: number;
    lng: number;
    alt: number;
};
