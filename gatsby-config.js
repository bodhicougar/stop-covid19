require('dotenv').config()

module.exports = {
  siteMetadata: {
    siteUrl: `https://stop-covid19-2020.netlify.com/`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Stop Covid 19 in 2020`,
        short_name: `StopCorona`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-sitemap`,
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-postcss`,
    'gatsby-plugin-netlify-cache',
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: ['src/styles/tailwind.css'],
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-mathdroid-covid19',
      options: {
        countries: require('./country-codes.json').map(countryCode => ({
          iso2: countryCode,
        })),
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CF_COVID_SPACE_ID,
        accessToken: process.env.CF_COVID_ACCESS_TOKEN,
      },
    },
  ],
}
