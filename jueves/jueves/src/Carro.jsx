import React, { useState } from 'react';
import "./Carro.css"
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';


function Carro(args) {
    const items = [
        {
          src: 'https://picfiles.alphacoders.com/123/123500.jpg',
          altText: 'Slide 1',
          caption: 'Slide 1',
          key: 1,
        },
        {
          src: 'https://wallpapers.com/images/hd/shrek-2-poster-scenery-x9c7vjfd4v9j5r36.jpg',
          altText: 'Slide 2',
          caption: 'Slide 2',
          key: 2,
        },
        {
          src: 'https://streamcoimg-a.akamaihd.net/000/390/626/390626-Banner-L2-82ae5d95b431c14b1c7d2a2e6c9b271b.jpeg',
          altText: 'Slide 3',
          caption: 'Slide 3',
          key: 3,
        },
        {
            src: 'https://picfiles.alphacoders.com/123/123580.png',
            altText: 'Slide 4',
            caption: 'Slide 4',
            key: 4,
          },
      ];
      
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem 
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <div className='customCar'>
        <img src={item.src} alt={item.altText} />
        </div>
      </CarouselItem>
    );
  });

  return (
    <Carousel 
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Carro;