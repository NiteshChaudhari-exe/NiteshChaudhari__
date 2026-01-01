import { useEffect, useRef, useState, useCallback } from 'react';
export function useScrollAnimation(threshold = 0.1, triggerOnce = false) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const observerRef = useRef(null);
    const handleIntersection = useCallback(([entry]) => {
        if (entry.isIntersecting) {
            setIsVisible(true);
            // Once visible, stop observing if triggerOnce is true
            if (triggerOnce && observerRef.current && ref.current) {
                observerRef.current.unobserve(ref.current);
            }
        }
        else if (!triggerOnce) {
            setIsVisible(false);
        }
    }, [triggerOnce]);
    useEffect(() => {
        const element = ref.current;
        if (!element)
            return;
        observerRef.current = new IntersectionObserver(handleIntersection, {
            threshold,
            rootMargin: '0px 0px -100px 0px', // Trigger animation earlier
        });
        observerRef.current.observe(element);
        return () => {
            if (observerRef.current && element) {
                observerRef.current.unobserve(element);
            }
        };
    }, [threshold, handleIntersection]);
    return { ref, isVisible };
}
