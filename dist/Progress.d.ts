import React from 'react';
interface IProps {
    classNameBtn: string;
    classNameTitle: string;
    classNameRemainning: string;
    classPercent: string;
}
declare const Progress: ({ classNameBtn, classNameTitle, classNameRemainning, classPercent }: IProps) => React.JSX.Element;
export default Progress;
