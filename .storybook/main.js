module.exports = {
	stories: ['../src/README.mdx'],
	core: {
		builder: '@storybook/builder-vite',
	},
	framework: {
		name: '@storybook/react-vite',
	},
	addons: ['@storybook/addon-docs'],
	docs: {
		autodocs: true,
	},
	refs: () => ({
		'source-foundations': {
			title: 'source-foundations',
			url: 'https://main--635a6aa8070dfdbfdac36f65.chromatic.com',
		},
		'source-react-components': {
			title: 'source-react-components',
			url: 'https://main--635a6fffacd30d393597c1ff.chromatic.com',
		},
		'source-react-components-development-kitchen': {
			title: 'source-react-components-development-kitchen',
			url: 'https://main--635a7057acd30d393597c208.chromatic.com',
		},
	}),
};
