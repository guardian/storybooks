import { addons } from 'storybook/manager-api';

addons.setConfig({
	//   isFullscreen: false,
	//   showNav: true,
	//   showPanel: true,
	//   panelPosition: 'bottom',
	//   enableShortcuts: true,
	//   showToolbar: true,
	//   theme: undefined,
	//   selectedPanel: undefined,
	//   initialActive: 'sidebar',
	sidebar: {
		showRoots: true,
		collapsedRoots: ['source-foundations_css-reset'],
	},
	//   toolbar: {
	//     title: { hidden: false },
	//     zoom: { hidden: false },
	//     eject: { hidden: false },
	//     copy: { hidden: false },
	//     fullscreen: { hidden: false },
	//   },
});
