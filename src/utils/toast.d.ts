export interface Toast {
    id: string;
    message: string;
    type: 'success' | 'error' | 'info';
}
export declare function setToastCallback(callback: (toast: Toast) => void): void;
export declare function showToast(message: string, type?: 'success' | 'error' | 'info'): void;
