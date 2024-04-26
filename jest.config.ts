//jest.config.ts

module.exports = {
	preset: 'ts-jest/presets/js-with-ts',
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.(js|jsx|ts|tsx|mjs)$': [
			'ts-jest',
			{
				tsconfig: './tsconfig.json',
			}
		]
	},
	transformIgnorePatterns: [ 'node_modules/(?!troublesome-dependency/.*)' ],
};
