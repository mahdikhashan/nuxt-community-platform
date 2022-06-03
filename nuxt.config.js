export default {
  publicRuntimeConfig: {
    enableMockserver: false,
  },
  ssr: false,
  target: "static",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Community Platform",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/mock', ssr: false},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
    "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  router: {
    middleware: ["auth"],
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: "token",
          global: true,
          required: true,
          type: "Bearer",
          maxAge: 3600,
        },
        refreshToken: {
          property: "token",
          data: "token",
          maxAge: 60 * 60 * 24 * 30,
        },
        endpoints: {
          login: {
            url: "/.netlify/functions/login",
            method: "post",
          },
          user: {
            url: "/.netlify/functions/user",
            method: "get",
          },
          logout: {
            url: "/.netlify/functions/logout",
            method: "post",
          },
          refresh: {
            url: "/.netlify/functions/refresh",
            method: "post",
          },
        },
      },
    },
    redirect: {
      login: "/login",
      logout: "/",
      callback: "/login",
      home: "/"
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
