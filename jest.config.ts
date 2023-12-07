//jest.config.ts

module.exports = {
	preset: 'ts-jest/presets/js-with-ts',
	testEnvironment: 'jsdom',
	globals: {
		'ts-jest': {
			tsconfig: './tsconfig.json',
		},
	},
	transform: {
		'^.+\\.(js|jsx|ts|tsx|mjs)$': 'ts-jest',
	},
	transformIgnorePatterns: [ 'node_modules/(?!troublesome-dependency/.*)' ],
};
