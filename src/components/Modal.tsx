import React, { ReactNode } from 'react';

interface ModalProps {
    open: boolean;
    onClose: () => void;
    headerLabel: string;
    children: ReactNode;
}

const Modal = (props : ModalProps) => {
    if (!props.open) {
        return null;
    }
    return (
        <div className="fixed inset-0 w-full h-full bg-black/20 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-md shadow-lg min-w-[300px]">
                <div className="flex justify-between items-center mb-2">
                    <header className="text-lg font-semibold text-gray-800">{props.headerLabel}</header>
                    <button
                        aria-label="Close"
                        className="text-red-500 hover:text-red-700 font-bold text-xl ml-4"
                        onClick={props.onClose}
                    >
                        &times;
                    </button>
                </div>
                {props.children}
            </div>
        </div>
    );
};

export default Modal;