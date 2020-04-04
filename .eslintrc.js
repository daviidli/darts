module.exports = {
	extends: 'erb/typescript',
	rules: {
		// A temporary hack related to IDE not resolving correct package.json
		'import/no-extraneous-dependencies': 'off',
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'lines-between-class-members': 'off',
		'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
		'class-methods-use-this': 'off'
	},
	settings: {
		'import/resolver': {
			// See https://github.com/benmosher/eslint-plugin-import/issues/1396#issuecomment-575727774 for line below
			node: {},
			webpack: {
				config: require.resolve('./configs/webpack.config.eslint.js')
			}
		}
	}
};
