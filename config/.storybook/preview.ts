import type { Preview } from '@storybook/react';
import '../../src/components/Button/ui/Button.css';
import '../../src/styles/theme.css';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	}
};

export const globalTypes = {
	dataThemes: {
		defaultValue: {
			list: [
				{ name: 'light', dataTheme: 'light', color: '#fafafa' },
				{ name: 'dark', dataTheme: 'dark', color: '#000000' }
			]
		}
	}
};

export default preview;
