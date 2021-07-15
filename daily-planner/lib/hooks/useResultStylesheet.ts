import { useMemo } from 'react';

type tUseResultStylesheetParams<DefaultStylesType = undefined> = {
    defaultStyles: DefaultStylesType,
    styles?: Partial<Record<keyof DefaultStylesType, unknown>>
}

const useResultStylesheet = <DefaultStylesType>({
    defaultStyles,
    styles
}: tUseResultStylesheetParams<DefaultStylesType>):DefaultStylesType => useMemo<DefaultStylesType>(() => Object.assign({}, defaultStyles, styles), [
    defaultStyles,
    styles
])

export default useResultStylesheet;
