import React from 'react';
interface IProps {
    title: string;
    className: string;
}
declare const BaseButton: ({ className, title }: IProps) => React.JSX.Element;
export default BaseButton;
