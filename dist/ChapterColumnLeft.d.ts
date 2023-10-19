import React from 'react';
interface IProps {
    activeItem: string | null;
    handleClickActive: (item: string | null) => void;
}
declare const ChapterColumnLeft: ({ handleClickActive, activeItem }: IProps) => React.JSX.Element;
export default ChapterColumnLeft;
