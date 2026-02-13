import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Wrap = styled.div`
  padding: 28px 0 56px;
  display: flex;
  justify-content: center;
`;

const SlideImg = styled.img`
  display: block;
  width: 100%;
  max-width: 480px;
  height: auto;
`;

const SlideCard = styled.div`
  max-width: 480px;
  width: 100%;
  box-sizing: border-box;
`;

const Container = styled.div`
  width: 100%;
  padding: 0 20px;

  .slick-list {
    padding: 0;
  }

  .slick-slide > div {
    display: flex;
    justify-content: center;
    padding: 0 35px;
    box-sizing: border-box;
  }

  .slick-dots {
    margin-top: 18px;
  }
`;

const HPVaderCarousel: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    adaptiveHeight: true,
    responsive: [
      { breakpoint: 900, settings: { slidesToShow: 1, centerPadding: '0px' } },
      { breakpoint: 640, settings: { slidesToShow: 1, centerPadding: '0px' } },
    ],
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
  };

  const base = '/assets/images/brand/Lending Harry Potter vs Darth_Vader';
  const slides = [
    `${base}/Screen_1.png`,
    `${base}/Screen_2.png`,
    `${base}/Screen_3.png`,
  ];

  return (
    <Wrap aria-label="Harry Potter vs Vader carousel">
      <Container>
        <Slider {...settings}>
          {slides.map((src, i) => (
            <div key={i}>
              <SlideCard>
                <SlideImg src={src} alt={`Slide ${i + 1}`} />
              </SlideCard>
            </div>
          ))}
        </Slider>
      </Container>
    </Wrap>
  );
};

export default HPVaderCarousel;
