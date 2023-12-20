import React, { FC } from 'react';
import { ButtonHTMLAttributes } from 'react';
import './Button.css';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	label?: string;
}

export const Button: FC<IButton> = (props) => {
	const { children, label, ...otherProps } = props;

	return (
		<button className='rs-button' {...otherProps} type='button'>
			{label || children}
		</button>
	);
};
