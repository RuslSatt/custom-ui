import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import './Modal.css';

const meta: Meta<typeof Modal> = {
	title: 'Modal',
	component: Modal,
	parameters: {},

	tags: ['autodocs'],

	argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Preview: Story = {
	args: {
		isOpen: true,
		children: 'This is a modal window'
	}
};
