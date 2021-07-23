/* eslint-disable no-unused-vars */
const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD
} = require('next/constants')

module.exports = (phase) => {
  // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  // when `next build` or `npm run build` is used
  const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'
  // when `next build` or `npm run build` is used
  const isStaging = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1'

  const env = {
    API_URL_EN: 'https://b-dev.tabas.com/api/v1',
    API_URL_PT: 'https://b-dev.tabas.com.br/api/v1'
  }

  const i18n = {
    locales: ['en-US', 'pt-BR'],
    defaultLocale: 'pt-BR',

    domains: [
      {
        domain: 'tabas.com',
        defaultLocale: 'en-US'
      },
      {
        domain: 'tabas.com.br',
        defaultLocale: 'pt-BR'
      },
      {
        domain: 'tabas.local',
        defaultLocale: 'en-US'
      },
      {
        domain: 'tabas.br.local',
        defaultLocale: 'pt-BR'
      }
    ]
  }

  return {
    env,
    i18n
  }
}
