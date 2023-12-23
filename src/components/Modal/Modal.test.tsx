import React from 'react';
import { render, screen } from '@testing-library/react';
import { Modal } from './Modal';

describe('Test render button', () => {
	test('Test render button', () => {
		render(<Modal>Модальное окно</Modal>);
		const button = screen.getByRole('button');
		expect(button).toBeInTheDocument();
	});
});
