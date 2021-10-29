import { EarthGlobeIcon } from '@sanity/icons'
import React from 'react'

export default {
  title: 'External Link',
  name: 'annotationLinkExternal',
  type: 'object',
  blockEditor: {
    icon: () => <EarthGlobeIcon />
  },
  fields: [
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: Rule => Rule.required().uri({ scheme: ['http', 'https'] })
    },
    // Open in a new window
    {
      title: 'Open in a new window?',
      name: 'newWindow',
      type: 'boolean'
    }
  ]
}
