module.exports = {
  roots: ['<rootDir>/#'],
  modulePaths: ['<rootDir>'],
  globals: {
    getUrl: path => `http://localhost:${5555}${path}`,
  },
  globalSetup: './#/utils/jest.setup.ts',
  globalTeardown: './#/utils/jest.teardown.ts',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
