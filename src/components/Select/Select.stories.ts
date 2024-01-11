import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';
import './Select.css';

const meta: Meta<typeof Select> = {
	title: 'shared/ui/Select',
	component: Select,
	parameters: {},

	tags: ['autodocs'],

	argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Select>;

export const WithoutValue: Story = {
	args: {
		options: [
			{
				value: 'Value1',
				content: 'Value1'
			},
			{
				value: 'Value2',
				content: 'Value2'
			}
		]
	}
};

export const WithValue: Story = {
	args: {
		value: 'Value2',
		disabled: true,
		options: [
			{
				value: 'Value1',
				content: 'Value1'
			},
			{
				value: 'Value2',
				content: 'Value2'
			}
		]
	}
};
