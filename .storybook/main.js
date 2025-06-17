module.exports = {
	stories: ['../src/README.mdx'],

	core: {
		builder: '@storybook/builder-vite',
	},

	framework: {
		name: '@storybook/react-vite',
	},

	addons: ['@storybook/addon-docs'],

	refs: () => ({
		source: {
			title: '@guardian/source',
			url: 'https://main--5e933197d94d9c002275a15e.chromatic.com',
			expanded: false,
		},
		'source-development-kitchen': {
			title: '@guardian/source-development-kitchen',
			url: 'https://main--664e157241c2ba0925660bce.chromatic.com/',
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
		'react-crossword': {
			title: 'react-crossword',
			url: 'https://main--672a4ddb2d73c2a1953e9b36.chromatic.com',
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
		thrashers: {
			title: 'thrashers',
			url: 'https://main--63fe86364bb6b7b73e47b125.chromatic.com',
			expanded: false,
		},
	}),
};
