import React from 'react';
/**
 * Reusable Modal component with backdrop and ESC key handler
 *
 * @example
 * <Modal isOpen={isOpen} onClose={handleClose} title="Add Book">
 *   <form>...</form>
 * </Modal>
 */
export declare function Modal({ isOpen, onClose, title, children }: {
    isOpen: any;
    onClose: any;
    title: any;
    children: any;
}): React.ReactPortal | null;
