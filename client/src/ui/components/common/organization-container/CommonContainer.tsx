import React, { useEffect, useState } from 'react';
import CarouselItem, { CarouselItemProps } from './CarouselItem';
import { ArrowButton, ButtonContainer, CarouselContainer, CommonContainer, CommonHeader, CommonTitle, LeftArrow, RightArrow, TextButton } from "./Styled";

type CommonContainerProps = {
    title: string;

    items: CarouselItemProps[];
    initialIndex: number;
    visibleCount: number;
}

const CommonContainerComponent: React.FC<CommonContainerProps> = ({title, items, initialIndex, visibleCount}) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    const isPrevDisabled = currentIndex <= 0;
    const isNextDisabled = currentIndex >= items.length - visibleCount;

    useEffect(() => {
        console.log(isPrevDisabled);
        console.log(isNextDisabled);
        console.log(currentIndex);
        console.log(CarouselContainer);
    }, [currentIndex]);

    const handleNext = () => {
        if (!isNextDisabled) {
            setCurrentIndex(currentIndex + 1);
        }
    };
    
    const handlePrev = () => {
        if (!isPrevDisabled) {
            setCurrentIndex(currentIndex - 1);
        }
    };
    
    
    return (
        <CommonContainer>
            <CommonHeader>
                <CommonTitle>{title}</CommonTitle>
                <ButtonContainer>
                    {/* <TextButton>See all</TextButton> */}
                    <ArrowButton onClick={handlePrev} disabled={isPrevDisabled}><LeftArrow/></ArrowButton>
                    <ArrowButton onClick={handleNext} disabled={isNextDisabled}><RightArrow/></ArrowButton>
                </ButtonContainer>
            </CommonHeader>
            <CarouselContainer>
                {items.slice(currentIndex, currentIndex + visibleCount).map((item, index) => (
                    <CarouselItem key={index} content={item.content} />
                ))}
            </CarouselContainer>
        </CommonContainer>
    );
};

export default CommonContainerComponent;