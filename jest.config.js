module.exports = {
  setupFilesAfterEnv: [
    'jest-plugin-context/setup',
    './jest.setup',
  ],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
  },
};
