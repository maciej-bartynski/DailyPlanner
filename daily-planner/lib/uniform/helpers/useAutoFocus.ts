import { useRef, useEffect } from "react";
import { TextInput } from "react-native";

const useAutoFocus = (autoFocus: boolean | undefined) => {

    const elementRef = useRef<TextInput>(null);
    const timerRef = useRef<NodeJS.Timeout>();

    useEffect(() => {

        if (autoFocus) {
            timerRef.current = setTimeout(() => {
                const node = elementRef.current;
                if (node && typeof node.focus === 'function') {
                    node.focus();
                }
            }, 100)
        }

        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        }

    }, [autoFocus]);

    return elementRef;

}

export default useAutoFocus;