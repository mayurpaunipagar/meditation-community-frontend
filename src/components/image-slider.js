import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src:'https://wallpapercave.com/wp/wp7174714.jpg',
    altText: 'Buddha Image 1',
    caption: ''
  },
  {
    src: 'https://image.freepik.com/free-photo/buddha-statue-black-background-free-space-text_35378-114.jpg',
    altText: 'Buddha Image 2',
    caption: ''
  },
  {
    src: 'https://mocah.org/thumbs/556084-meditation-spiritual.jpg',
    altText: 'Buddha Image 3',
    caption: ''
  },
  {
    src:'https://img.freepik.com/free-photo/statue-buddha-sitting-meditation-with-black-copy-space_138656-79.jpg',
    altText:'Buddha Image 4',
    caption:''
  }
];

const ImageSlider = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className="imageSliding" src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default ImageSlider;