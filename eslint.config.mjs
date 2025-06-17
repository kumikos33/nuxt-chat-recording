// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt();
// Your custom configs here

[
  {
    files: ["resources/**/*.{js,mjs,cjs,vue}"],
    rules: {
      "vue/multi-word-component-names": [
        "error",
        {
          ignores: [],
        },
      ],
    },
  },
];
