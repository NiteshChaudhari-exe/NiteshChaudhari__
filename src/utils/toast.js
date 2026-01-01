// import { setToastCallback } from '../utils/toast';
// import type { Toast as ToastType } from '../utils/toast';
// import { useScrollAnimation } from '../hooks/useScrollAnimation';
let toastCallback = null;
export function setToastCallback(callback) {
    toastCallback = callback;
}
export function showToast(message, type = 'info') {
    if (toastCallback) {
        toastCallback({
            id: Date.now().toString(),
            message,
            type,
        });
    }
}
