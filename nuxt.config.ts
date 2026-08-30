// https://nuxt.com/docs/api/configuration/nuxt-config
// GitHub Pages: set NUXT_APP_BASE_URL before `npm run generate` (see deploye.sh).
const appBaseURL = process.env.NUXT_APP_BASE_URL || '/'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-07',
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      /** Django API origin, e.g. http://127.0.0.1:8000 or https://api.example.com */
      apiBase: process.env.NUXT_PUBLIC_API_URL || 'http://127.0.0.1:8000',
    },
  },

  components: [
    {
      path: '~/components/icons',
      pathPrefix: false,
    },
    {
      path: '~/components',
      ignore: ['icons'],
    },
  ],

  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/motion/nuxt',
    '@vueuse/nuxt',
  ],

  css: ['~/assets/css/main.css'],

  /** Prerender to `.output/public` for static hosts (`nuxt generate`). */
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      failOnError: false,
      routes: [
        '/about',
        '/academic-coverage',
        '/grades',
        '/student-parent',
        '/student-parent/subscription',
        '/student-parent/enrollment',
        '/tutors',
        '/tutors/registration-plans',
        '/institutions',
        '/faq',
        '/careers',
        '/careers/admission-counsellor',
        '/careers/admission-coordinator',
        '/careers/academic-counsellor',
        '/careers/customer-support-executive',
        '/careers/hr-executive',
        '/careers/finance-accounts-executive',
        '/careers/administrative-compliance-executive',
        '/careers/digital-marketing-executive',
        '/careers/erp-tech-operations-executive',
      ],
    },
  },

  app: {
    baseURL: appBaseURL,
    buildAssetsDir: '/_nuxt/',
    head: {
      title: 'Indian Mentors — Find the Perfect Tutor for Your Child',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'India\'s #1 verified tutor platform. Connect with background-checked, subject-verified home and online tutors for Classes 1-12, JEE/NEET, and college students. Book a free demo today.',
        },
        { name: 'theme-color', content: '#FCFCFA' },
        { property: 'og:title', content: 'Indian Mentors — Verified Tutors for Every Student' },
        {
          property: 'og:description',
          content:
            'Structured tutoring and reliable teacher recruitment — built for families and educators across India.',
        },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: `${appBaseURL}assets/img/logo/favicon.png`.replace(/\/{2,}/g, '/') },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Caveat:wght@500;600;700&family=Inter:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap',
        },
      ],
    },
  },

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.js',
  },

  experimental: {
    payloadExtraction: false,
  },
})
