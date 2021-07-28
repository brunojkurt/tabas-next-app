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

  const i18n = {
    locales: ['en-US', 'pt-BR'],
    defaultLocale: 'pt-BR',

    domains: [
      {
        domain: 'tabas.local',
        defaultLocale: 'en-US'
      },
      {
        domain: 'tabas.br.local',
        defaultLocale: 'pt-BR'
      },
      {
        domain: 'tabas.com',
        defaultLocale: 'en-US'
      },
      {
        domain: 'tabas.com.br',
        defaultLocale: 'pt-BR'
      }
    ]
  }

  const images = {
    domains: ['tabas.local', 'tabas.br.local']
  }

  return {
    i18n,
    images
  }
}
