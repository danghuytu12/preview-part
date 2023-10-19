import React from 'react';
interface IProps {
    handleClickActive: (item: string | null) => void;
    item: string | null;
    activeItem: string | null | undefined;
}
declare const Chapter: ({ handleClickActive, item, activeItem }: IProps) => React.JSX.Element;
export default Chapter;
