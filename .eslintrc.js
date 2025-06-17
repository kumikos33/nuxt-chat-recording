module.exports = {
  extends: [
    "@nuxt/eslint-config",
    "plugin:vue/vue3-recommended", // Example for Vue 3
  ],
  rules: {
    // Add or override specific rules here
    "no-unused-vars": "warn",
    "vue/multi-word-component-names": "off",
  },
};
