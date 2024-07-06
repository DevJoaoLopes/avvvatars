import * as React from 'react';
declare type Style = 'character' | 'shape';
interface Params {
    displayValue?: string;
    value: string;
    size?: number;
    shadow?: boolean;
    style?: Style;
    border?: boolean;
    borderSize?: number;
    borderColor?: string;
    radius?: number;
}
export default function Avvvatars(params: Readonly<Params>): React.JSX.Element;
export {};
