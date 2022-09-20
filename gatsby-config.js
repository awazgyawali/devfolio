module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://aawaz.dev`,
    // Your Name
    name: 'Avaaj Gyawali',
    // Main Site Title
    title: `Avaaj Gyawali | Full-Stack Developer`,
    // Description that goes under your name in main bio
    description: `I'm an expert Software Engineer with 8+ years of experience in the field. I contribute a lot to the open source community, especially to the Flutter ecosystem and its firebase packages.`,
    // Optional: Twitter account handle
    author: `@AawazGyawali`,
    // Optional: Github account URL
    github: `https://github.com/awazgyawali`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/aawaz/`,
    // Content of the About Me section
    about: `I'm an expert Software Engineer with 8+ years of experience in the field. I contribute a lot to the open-source community, especially to the Flutter ecosystem and its firebase packages. So far I've successfully developed, delivered, and published 70+ software solutions with excellent ratings and happy users.

Having the experience of operating a tech business of my own with a successful exit, I can be your perfect project manager/tech lead to give ideas and bring technical value to your next venture.

To date, I have worked with 15+ companies/teams and provided my service to bring more value to their products.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Nepal Share',
        description:
          `A mobile-first application that can allow users to track their portfolio, manage notes and get alerts on their desired configuration.

          The application has 1M+ monthly active users and 100K+ daily active users.`,
        link: 'https://play.google.com/store/apps/details?id=com.brainants.meroshare&hl=en&gl=US',
      },
      {
        name: 'Stratosfy Marker',
        description:
          'Remote workforce management software solution.',
        link: 'https://play.google.com/store/apps/developer?id=Stratosfy+Inc',
      },
      {
        name: 'Logistixai.com',
        description:
          'logistix.ai is an advanced order and field management platform for Final Mile and Home Service Providers.',
        link: 'https://apps.apple.com/us/app/logistix-ai/id1519937068',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Toptal - Software Engineer',
        description: 'Full-Stack Developer, August 2022 - Present',
        link: 'https://www.toptal.com/resume/avaaj-gyawali',
      },
      {
        name: 'Logistixai.com',
        description: 'logistix.ai is an advanced order and field management platform for Final Mile and Home Service Providers.',
        link: 'https://apps.apple.com/us/app/logistix-ai/id1519937068',
      },
      {
        name: 'Brainants Technology Pvt Ltd',
        description: 'Chief Executive Officer',
        link: 'https://brainants.com/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [

      {
        name: 'Languages & Frameworks',
        description:
          'Dart, JavaScript, TypeScript, Kotlin, Objective C, Swift, YAML, Flutter, Express.js, React Native',
      },
      {
        name: 'Libraries/APIs',
        description: 'Stripe, Paypal, Firebase, Agora, Algolia',
      },
      {
        name: 'Databases',
        description: 'MongoDB, PostreSQL, MySQL',
      },
      {
        name: 'Cloud Computing',
        description:
          'Digital Ocean, Google Cloud Platform, Azure',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#3366B3`,
        theme_color: `#3366B3`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
