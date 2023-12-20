import React from 'react';
import { classNames } from '../../../helpers/classNames';
import { Portal } from '../../Portal/Portal';
import './Modal.css';

interface IModal {
	children?: React.ReactNode;
	isOpen?: boolean;
	onClose?: () => void;
}

export const Modal = (props: IModal) => {
	const { children, isOpen, onClose, ...otherProps } = props;

	const handleClose = () => {
		if (onClose) {
			onClose();
		}
	};

	const handleContentClick = (e: React.MouseEvent) => {
		e.stopPropagation();
	};

	const mods: Record<string, boolean> = {
		opened: isOpen
	};

	return (
		<Portal>
			<div className={classNames('rs-modal', [], mods)} {...otherProps}>
				<div className='rs-modal-overlay' onClick={handleClose}>
					<div className='rs-modal-content' onClick={handleContentClick}>
						{children}
					</div>
				</div>
			</div>
		</Portal>
	);
};
