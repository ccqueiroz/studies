module.exports = {
  coverageDirectory: 'coverage',
  collectCoverage: true,
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/*.{js,jsx,ts,tsx}',
    '!src/styles/*.{js,jsx,ts,tsx}',
    '!src/styles/**/*.{js,jsx,ts,tsx}',
    '!src/config/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
    '!src/templates/**/*.{js,jsx,ts,tsx}',
  ],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/public/'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  testEnvironment: 'jsdom',
  moduleNameMapper: { '\\.(css|scss|sass)$': 'identity-obj-proxy' },
};
