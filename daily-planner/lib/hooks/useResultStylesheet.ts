import { useMemo } from 'react';

type tUseResultStylesheetParams<DefaultStylesType = undefined> = {
    defaultStyles: DefaultStylesType,
    styles?: Partial<DefaultStylesType>,
    mergeStyles?: Partial<DefaultStylesType>,
}

type tAnyObject = {[key: string]: unknown };

const useResultStylesheet = <DefaultStylesType>({
    defaultStyles,
    styles,
    mergeStyles,
}: tUseResultStylesheetParams<DefaultStylesType>): DefaultStylesType => useMemo<DefaultStylesType>(() => {
    const newStyles = Object.assign({}, defaultStyles, styles);
    const styleSheet: tAnyObject = newStyles;
    if (mergeStyles) Object.entries(mergeStyles).forEach(entry=>{
        const [key, val] = entry;
        styleSheet[key] = Object.assign({}, styleSheet[key], val )
    })
    return newStyles
}, [
    defaultStyles,
    styles
])

export default useResultStylesheet;
