import { render, screen } from '@testing-library/react';
import { Input } from './Input';
import React from 'react';

describe('test input', () => {
	test('set value', () => {
		render(<Input value={'Text'} />);
		const input = screen.getByTestId('input');
		expect(input).toHaveValue('Text');
	});
});
