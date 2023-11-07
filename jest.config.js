/** @type {import('ts-jest').JestConfigWithTsJest} */
const { COVERAGE_LOCAL } = process.env;

const coverageConfig =
  COVERAGE_LOCAL === '1'
    ? {}
    : {
        coverageReporters: ['text', 'cobertura']
      };

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coveragePathIgnorePatterns: ['/node_modules/', '/tests/'],
  ...coverageConfig
};
