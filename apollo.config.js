module.exports = {
  client: {
    service: {
      name: 'localhost',
      url: 'http://localhost:3000/api/graphql',
      skipSSLValidation: true,
    },
    includes: ['src/frontend/**/*.{ts,tsx}'],
    tagName: 'gql',
  },
}
