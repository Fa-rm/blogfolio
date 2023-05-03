// @ts-check

/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Fred',
  author: 'Frederico Matias',
  headerTitle: '',
  description: 'Exploring the intersections of my experience',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://blogfolio-8xaf-m9skuqonf-fa-rm.vercel.app/',
  siteRepo: 'https://github.com/Fa-rm/blogfolio',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/fred.jpg',
  socialBanner: '/static/images/web-banner.png',
  email: 'fredrmatias@gmail.com',
  github: 'https://github.com/Fa-rm/',
  twitter: 'https://twitter.com/fredrmatias',
  facebook: 'https://facebook.com',
  youtube: 'https://youtube.com',
  linkedin: 'https://www.linkedin.com/in/frederico-matias-128671200/',
  locale: 'en-US',
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // analyticsConfig={siteMetadata.analytics} content security policy in the `next.config.js` file.
    // supports plausible, simpleAnalytics, umami or googleAnalytics
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    posthogProjectApiKey: '', // e.g. AhnJK8392ndPOav87as450xd
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  comments: {
    provider: 'giscus',
    giscusConfig: {
      repo: 'Fa-rm/blogfolio',
      repositoryId: 'R_kgDOJTMvAg',
      category: 'Announcements',
      categoryId: 'DIC_kwDOJTMvAs4CWIWJ',
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'dark',
      themeURL: '',
      lang: 'en',
    },
  },
}

module.exports = siteMetadata
