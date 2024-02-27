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
			title: '@guardian/source-foundations',
			url: 'https://main--635a6aa8070dfdbfdac36f65.chromatic.com',
			expanded: false,
		},
		'source-react-components': {
			title: '@guardian/source-react-components',
			url: 'https://main--635a6fffacd30d393597c1ff.chromatic.com',
			expanded: false,
		},
		'source-react-components-development-kitchen': {
			title: '@guardian/source-react-components-development-kitchen',
			url: 'https://main--635a7057acd30d393597c208.chromatic.com',
			expanded: false,
		},
		'braze-components': {
			title: 'braze-components',
			url: 'https://main--5f58cfe0c3997f00227756d7.chromatic.com',
			expanded: false,
		},
		'dotcom-rendering': {
			title: 'dotcom-rendering',
			url: 'https://main--63e251470cfbe61776b0ef19.chromatic.com',
			expanded: false,
		},
		'flexible-content': {
			title: 'flexible-content',
			url: 'https://main--65569b6bc120a11299938636.chromatic.com',
			expanded: false,
		},
		gateway: {
			title: 'gateway',
			url: 'https://main--60929d168594f80039336501.chromatic.com',
			expanded: false,
		},
		'manage-frontend': {
			title: 'manage-frontend',
			url: 'https://main--61eee3dabb99df003a4090fd.chromatic.com',
			expanded: false,
		},
		'support-dotcom-components': {
			title: 'support-dotcom-components',
			url: 'https://main--5fb7a8c515dcfc0021275379.chromatic.com',
			expanded: false,
		},
		'support-frontend': {
			title: 'support-frontend',
			url: 'https://main--62e115310aef0868687b2322.chromatic.com',
			expanded: false,
		},
	}),
};
