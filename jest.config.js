const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '@utils(.*)$': '<rootDir>/src/utils/$1',
    '@store(.*)$': '<rootDir>/src/store/$1',
    '@api(.*)$': '<rootDir>/src/api/$1',
    '@theme(.*)$': '<rootDir>/src/theme/$1',
    '@components(.*)$': '<rootDir>/src/components/$1',
    '@containers(.*)$': '<rootDir>/src/containers/$1',
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
