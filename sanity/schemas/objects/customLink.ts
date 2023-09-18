export default {
    name: 'customLink',
    title: 'Call to action',
    type: 'object',
    fields: [
      {
        name: 'linkLabel',
        type: 'string',
        title: 'Label'
      },
      {
        name: 'linkUrl',
        type: 'url',
        title: 'URL',
      }
    ]
  };