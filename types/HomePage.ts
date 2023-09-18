import { TypedObject } from "sanity";
import { FeaturedImage } from "./FeaturedImage";
import { Property } from "./Property";

export type HomePage = {
    _id: string;
    _createdAt: Date;
    title: string;
    subtitle: string;
    featuredImage: FeaturedImage;
    slug: string;
    features: HomePageFeature[];
    featuredProperties: FeaturedProperties
};

export type HomePageFeature = {
    content: TypedObject | TypedObject[];
    _type: string;
    links: CustomLink[];
    _key: string;
    title: string;
    featuredImage: FeaturedImage;
    
};

export type FeaturedProperties = {
    title:string,
    properties: Property[]
}


export type CustomLink = {
    _key: string;
    linkLabel: string;
    _type: string;
    linkUrl: string;
}