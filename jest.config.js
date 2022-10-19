/** @type {import('jest').Config} */
const config = {
  verbose: true,
};

module.exports = {
  moduleNameMapper: {
    '^react-dom((\\/.*)?)$': 'react-dom-17$1',
    '^react((\\/.*)?)$': 'react-17$1',
    '^axios$': require.resolve('axios'),
  },
  transformIgnorePatterns: ['/node_modules/(?!(axios|react)/)'],
};
