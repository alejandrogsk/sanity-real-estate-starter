import { Rule } from "sanity";

export default {
    name: 'customImage',
    title: 'Image',
    type: 'image',
    options: {
      hotspot: true,
    },
    fields: [
      {
        title: 'Alt Text',
        name: 'alt',
        type: 'string',
        validation: (Rule:Rule) => Rule.error("Alt text can't be empty").required(),
        
      },
    ],
    preview: {
      select: {
        imageUrl: 'asset.url',
        alt: 'alt',
      },
    },
  };