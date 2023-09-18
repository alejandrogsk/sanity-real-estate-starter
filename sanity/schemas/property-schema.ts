const property = {
    name: "property",
    title: "Real Estate",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string"
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: { source: "title", maxLength: 96 }
      },
      {
        name: 'featuredImage',
        title: 'Featured Image',
        type: 'customImage',
      },
      {
        name: "images",
        title: "Images",
        type: "array",
        of:[{
            type: "image"
        }]
      },
      {
        name: "address",
        title: "Address",
        type: "string"
      },
      {
        name: "isOnRent",
        title: "Is on rent",
        type: "boolean",
        initialValue: false
      },
      {
        name: 'rentPrice',
        title: 'Rent Price',
        type: 'number',
        hidden: ({document}:any) => !document?.isOnRent
      },
      {
        name: "isOnSale",
        title: "Is on sale",
        type: "boolean",
        initialValue: false
      },
      {
        name: 'salesPrice',
        title: 'Sales Price',
        type: 'number',
        hidden: ({document}:any) => !document?.isOnSale
      },
      {
        name: "squareFeet",
        title: "Square Feet",
        type: "number"
      },
      {
        name: "bedrooms",
        title: "Bedrooms",
        type: "number"
      },
      {
        name: "bathrooms",
        title: "Bathrooms",
        type: "number"
      },
      {
        name: "garage",
        title: "Garages",
        type: "number"
      },
      {
        name: "yearOfConstruction",
        title: "Year of construction",
        type: "date"
      },
      {
        name: "mapLocation",
        title: "Map Location",
        type: "geopoint",
        description: "Here should go the coordinates for the map"
      },
      {
        name: "features",
        title: "Features",
        type: "array",
        of: [{type: 'string'}]
      },
      {
        name: "description",
        title: "Description",
        type: "array",
        of: [
          { type: "block" }
        ]
      },
      {
        name: "realtor",
        title: "Realtor",
        type: "reference",
        to: [
          { type: "realtor" }
        ]
      },
      {
        name: "relatedProperties",
        title: "Realted Properties",
        type: "array",
        of: [
          { type: "reference", to:[{type: "property"}] }
        ]
      },
      {
        name: 'seo',
        title: 'Seo Data',
        type: 'customSeo',
      },
    ],
  
  }
  
  export default property;