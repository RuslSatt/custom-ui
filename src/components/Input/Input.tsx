import React, { InputHTMLAttributes, memo } from 'react';
import './Input.css';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

interface InputProps extends HTMLInputProps {
	onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
	const { onChange, value, type, ...otherProps } = props;

	const handlerOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
	};

	return (
		<div className='rs-input-root'>
			<input
				data-testid='input'
				type={type}
				value={value}
				onChange={handlerOnChange}
				className='rs-input'
				{...otherProps}
			/>
		</div>
	);
});
