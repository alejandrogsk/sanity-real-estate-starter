import property from "./property-schema";
import realtor from "./realtor-schema"
import customImage from "./objects/customImage";
import customSeo from "./objects/customSeo";
import customLink from "./objects/customLink";
import reusableComponent1 from "./objects/reusableComponent1";
import homepageSchema from "./homepage-schema";


const schemas = [
    //Documents
    homepageSchema, 
    realtor, 
    property,
    //Objects
    customImage,
    customSeo,
    customLink,
    reusableComponent1
];

export default schemas;