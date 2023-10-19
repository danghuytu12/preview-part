import React from 'react';
interface IProps {
    activeItem: string | null;
    handleClickActive: (item: string | null) => void;
}
declare const ChapterLeft: ({ handleClickActive, activeItem }: IProps) => React.JSX.Element;
export default ChapterLeft;
