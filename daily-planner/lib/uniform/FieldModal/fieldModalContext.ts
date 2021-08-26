import { createContext } from "react";
import { TextInput } from "react-native";

export interface iFieldModalContext {
    onShow: () => void;
    setFocused: (isFocused: boolean) => void;
    focused: boolean;
    inputReference: React.RefObject<TextInput>;
}

const CONTEXT_TEMPLATE: iFieldModalContext = {
    onShow: () => { },
    setFocused: () => { },
    focused: false,
    inputReference: { current: null }
}

const FieldModalContext = createContext<iFieldModalContext>(CONTEXT_TEMPLATE);

export default FieldModalContext;