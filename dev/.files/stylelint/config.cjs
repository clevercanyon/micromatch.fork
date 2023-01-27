/**
 * Stylelint config file.
 *
 * Stylelint is not aware of this config file's location.
 *
 * @note PLEASE DO NOT EDIT THIS FILE!
 * @note This entire file will be updated automatically.
 * @note Instead of editing here, please review <https://github.com/clevercanyon/skeleton>.
 *
 * @see https://stylelint.io/user-guide/configure
 */
/* eslint-env es2021, node */

let commonPlugins = [];
let commonExtends = [];
let commonIgnoreFiles = [];
let commonRules = {};

module.exports = {
	plugins: (commonPlugins = [
		'stylelint-scss', //
		'stylelint-order',
	]),
	extends: (commonExtends = [
		'stylelint-config-standard-scss', //
		'stylelint-config-recess-order',
	]).concat(['stylelint-config-prettier']),

	ignoreFiles: (commonIgnoreFiles = [
		'**/dist/**', //
		'**/.yarn/**',
		'**/vendor/**',
		'**/node_modules/**',
		'**/jspm_packages/**',
		'**/bower_components/**',
	]),
	rules: (commonRules = {
		'indentation': 'tab',
		'no-duplicate-selectors': false,
		'selector-type-no-unknown': false,
		'no-descending-specificity': false,
		'selector-class-pattern': '^[_-]?[a-z][a-z0-9]*(?:[_-]{1,2}[a-z0-9]+)*$',
		'selector-id-pattern': '^[a-z][a-z0-9]*(?:[_-]{1,2}[a-z0-9]+)*$',
		'at-rule-no-unknown': [true, { ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen'] }],
	}),
	overrides: [
		{
			files: ['**/*.scss'],
			ignoreFiles: commonIgnoreFiles,

			plugins: commonPlugins,
			extends: commonExtends.concat(['stylelint-config-prettier']),

			customSyntax: 'postcss-scss',
			rules: {
				...commonRules,
				'scss/at-rule-no-unknown': commonRules['at-rule-no-unknown'],
			},
		},
		{
			files: ['**/*.css'],
			ignoreFiles: commonIgnoreFiles,

			plugins: commonPlugins,
			extends: commonExtends.concat(['stylelint-config-prettier']),

			customSyntax: 'postcss-safe-parser',
			rules: { ...commonRules },
		},
	],
};
