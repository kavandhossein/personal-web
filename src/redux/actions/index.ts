import Constant, { Modal } from './../constants'


export function newModal(modal: Partial<Modal>) {
    return {
        type: Constant.NEW_MODAL,
        payload: modal
    };
}

export function closeModal(id: string) {
    return {
        type: Constant.CLOSE_MODAL,
        payload: id
    };
}