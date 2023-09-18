export default {
    name: "homePage",
    title: "Home Page",
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
        name: "subtitle",
        title: "Subtitle",
        type: "string"
      },
      {
        name: 'featuredImage',
        title: 'Featured Image',
        type: 'customImage',
      },
      {
        name: "features",
        title: "Features",
        type: "array",
        of: [{
            type: "reusableComponent1"
        }]
      },
      {
        name: 'featuredProperties',
    title: 'Featured properties',
        type: 'object',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: "properties",
        title: "Properties",
        type: "array",
        of: [
          { type: "reference", to:[{type: "property"}] }
        ]
      },
      
    ],
    
      },
      {
        name: 'seo',
        title: 'Seo Data',
        type: 'customSeo',
      },
    ]
  }
