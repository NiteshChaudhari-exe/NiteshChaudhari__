/**
 * Global Keyboard Navigation Hook
 * Provides keyboard accessibility features
 */

import { useEffect } from 'react';

export function useKeyboardNavigation() {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Escape key closes modals/menus
      if (e.key === 'Escape') {
        // Dispatch custom event that components can listen to
        window.dispatchEvent(new CustomEvent('close-modals'));
      }

      // Ctrl/Cmd + K for quick search (extensible)
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        // Handle quick search here
      }

      // Tab key focus management is automatic in HTML
      // Just ensure proper focus order in the DOM
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
}

/**
 * Utility to manage focus trap for modals
 */
export function useFocusTrap(elementRef: React.RefObject<HTMLElement>, isActive: boolean) {
  useEffect(() => {
    if (!isActive || !elementRef.current) return;

    const element = elementRef.current;
    const focusableElements = element.querySelectorAll(
      'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    element.addEventListener('keydown', handleKeyDown);
    // Focus first element
    firstElement?.focus();

    return () => element.removeEventListener('keydown', handleKeyDown);
  }, [isActive, elementRef]);
}
