const jestConfig = {
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  verbose: true,
  notify: true,
  testMatch: ['**/**.test.tsx', '**/**.test.ts'],
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [
    'node_modules',
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleDirectories: [
    './node_modules',
    './src',
  ],
  moduleNameMapper: {
    '^.+\\.(scss|less|css)$': '<rootDir>/mocks/jestStyle.mock.js',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.tsx',
    'src/**/*.ts',
    'src/**/*.js',
  ],
  coverageThreshold: {
    global: {
      statements: 0,
      branches: 0,
      functions: 0,
      lines: 0,
    },
  },
  coverageDirectory: 'reports/coverage',
  setupFiles: [],
};

module.exports = jestConfig;
