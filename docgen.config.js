module.exports = {
  componentsRoot: 'src/components',
  outDir: './docs/components',
  pages: [
    {
      components: 'base/**/[a-zA-Z]*.{vue,jsx,tsx}',
    },
    {
      components: 'form/**/[a-zA-Z]*.{vue,jsx,tsx}',
    },
    {
      components: 'interaction/**/[a-zA-Z]*.{vue,jsx,tsx}',
    },
  ],
  defaultExamples: false,
  apiOptions: {
    jsx: true
  }
}
