export default {
    name: 'reusableComponent1',
    title: 'Feature',
    type: 'object',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: "content",
        title: "Content",
        type: "array",
        of: [
          { type: "block" }
        ]
      },
      {
        name: 'featuredImage',
        title: 'Featured Image',
        type: 'customImage',
      },
      {
        name: 'links',
        type: 'array',
        title: 'Call to actions',
        of: [{ type:'customLink'}]
      }
    ]
  };