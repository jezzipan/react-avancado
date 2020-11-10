module.exports = {
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    collectCoverageFrom: ['src/**/*.ts(x)'],
    setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}