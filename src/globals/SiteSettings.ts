import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site Settings',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'hero',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'subtitle',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'navigation',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'href',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'footer',
      type: 'group',
      fields: [
        {
          name: 'motto',
          type: 'text',
          required: true,
        },
        {
          name: 'copyright',
          type: 'text',
          required: true,
        },
        {
          name: 'organizationName',
          type: 'text',
          required: true,
        },
        {
          name: 'websiteUrl',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
