import React, { SelectHTMLAttributes, memo, useMemo } from 'react';
import './Select.css';

type HTMLSelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'>;

interface SelectOption {
	value: string;
	content: string;
}

interface SelectProps extends HTMLSelectProps {
	options?: SelectOption[];
	value?: string;
	onChange?: (value: string) => void;
}

export const Select = (props: SelectProps) => {
	const { onChange, options, value, ...otherProps } = props;

	const handlerOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		onChange?.(e.target.value);
	};

	const items = options?.map((item: SelectOption) => (
		<option key={item.value} value={item.value}>
			{item.content}
		</option>
	));

	return (
		<select value={value} onChange={handlerOnChange} {...otherProps} className='rs-select'>
			{items}
		</select>
	);
};
