import Carousel from 'react-bootstrap/Carousel';
import flipMobile from './CarouselImage/galaxy-z-filp5.jpg';
import foldMobile from './CarouselImage/galaxy-z-fold5.jpg';
import bookSeries from './CarouselImage/galaxy-book3-series.jpg';
import tab from './CarouselImage/galaxy-tab-s9-series.jpg';
import watch from './CarouselImage/galaxy-watch-s6-series.jpg';

const CarouselPage = () => {
  return (
    <Carousel fade data-bs-theme="dark">
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100 carousel-image"
          src={foldMobile}
          alt="Galaxy Z Fold5"
          style={{height:'600px'}}
        />
        <Carousel.Caption>
          <h3>Galaxy Z Fold5</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100 carousel-image"
          src={flipMobile}
          alt="Galaxy Z Flip5"
          style={{height:'600px'}}
        />
        <Carousel.Caption>
          <h3>Galaxy Z Flip5</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100 carosel-image"
          src={bookSeries}
          alt="Galaxy Book3 Series"
          style={{height:'600px'}}
        />
        <Carousel.Caption>
          <h3>Galaxy Book3 Series</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100 carousel-image"
          src={tab}
          alt="Galaxy Tab s9 Series"
          style={{height:'600px'}}
        />
        <Carousel.Caption>
          <h3>Galaxy Tab s9 Series</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100 carousel-image"
          src={watch}
          alt="Galaxy Watch s6 Series"
          style={{height:'600px'}}
        />
        <Carousel.Caption>
          <h3>Galaxy Watch s6 Series</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselPage;