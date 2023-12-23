import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import './Input.css';

const meta: Meta<typeof Input> = {
	title: 'Input',
	component: Input,
	parameters: {},

	tags: ['autodocs'],

	argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Preview: Story = {
	args: {}
};
