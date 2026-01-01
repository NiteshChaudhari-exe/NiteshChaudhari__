// import { setToastCallback } from '../utils/toast';
// import type { Toast as ToastType } from '../utils/toast';
// import { useScrollAnimation } from '../hooks/useScrollAnimation';

export interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}

let toastCallback: ((toast: Toast) => void) | null = null;

export function setToastCallback(callback: (toast: Toast) => void) {
  toastCallback = callback;
}

export function showToast(message: string, type: 'success' | 'error' | 'info' = 'info') {
  if (toastCallback) {
    toastCallback({
      id: Date.now().toString(),
      message,
      type,
    });
  }
}
