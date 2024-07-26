import { defineNuxtConfig  } from "nuxt/config"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@packages/ui'],
  
  srcDir: "./src",

  typescript: {
    shim: false,
    strict: true,
    typeCheck: false
  }
})
