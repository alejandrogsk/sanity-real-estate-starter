import { Rule } from "sanity";

export default {
    name: 'customSeo',
    title: 'SEO',
    type: 'object',
    options: {
      hotspot: true,
    },
    fields: [
      {
        name: 'seoTitle',
        type: 'string',
        title: 'Seo Title',
        validation: (Rule:Rule) => Rule.max(70).warning('Shorter titles are usually better'),
      },
      {
        name: 'seoDescription',
        type: 'string',
        title: 'Seo Description',
        validation: (Rule:Rule) =>  Rule.max(255).warning('Should be shorted than 255 characters'),
      }
    ]
  };