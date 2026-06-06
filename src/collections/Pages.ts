import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
    },
    {
      name: 'sections',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'type',
          type: 'select',
          required: true,
          options: [
            { label: 'Text block', value: 'text' },
            { label: 'Quote', value: 'quote' },
            { label: 'Testimonial', value: 'testimonial' },
            { label: 'Principles', value: 'principles' },
            { label: 'Location', value: 'location' },
          ],
        },
        {
          name: 'theme',
          type: 'select',
          defaultValue: 'light',
          options: [
            { label: 'Light', value: 'light' },
            { label: 'Dark', value: 'dark' },
          ],
        },
        {
          name: 'layout',
          type: 'select',
          defaultValue: 'single',
          options: [
            { label: 'Single column', value: 'single' },
            { label: 'Two columns with image', value: 'imageText' },
          ],
        },
        {
          name: 'heading',
          type: 'text',
        },
        {
          name: 'body',
          type: 'textarea',
        },
        {
          name: 'imageKey',
          type: 'select',
          options: [
            { label: 'Marianne', value: 'marianne' },
            { label: 'Angel', value: 'angel' },
            { label: 'Compass', value: 'compass' },
            { label: 'GODC logo', value: 'godcLogo' },
          ],
        },
        {
          name: 'items',
          type: 'array',
          fields: [
            {
              name: 'heading',
              type: 'text',
              required: true,
            },
            {
              name: 'body',
              type: 'textarea',
              required: true,
            },
          ],
        },
        {
          name: 'testimonial',
          type: 'group',
          fields: [
            {
              name: 'quote',
              type: 'textarea',
            },
            {
              name: 'authorName',
              type: 'text',
            },
            {
              name: 'authorTitle',
              type: 'text',
            },
            {
              name: 'logoImageKey',
              type: 'select',
              defaultValue: 'compass',
              options: [{ label: 'Compass', value: 'compass' }],
            },
            {
              name: 'avatarImageKey',
              type: 'select',
              defaultValue: 'angel',
              options: [{ label: 'Angel', value: 'angel' }],
            },
          ],
        },
      ],
    },
  ],
}
