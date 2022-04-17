import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// import Image from "next/image";
function Banner() {
  return (
    <div className=''>
      {/* <div className='absolute w-full ' />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >p
        <div>
          <img
            className='w-full h-96'
            src='/slider-1.jpg'
            loading='lazy'
            alt=''
          />
        </div>
        <div>
          <img
            className='w-full h-96'
            src='/slider-2.jpg'
            loading='lazy'
            alt=''
          />
        </div>
        <div>
          <img
            className='w-full h-96'
            src='/slider-3.jpg'
            loading='lazy'
            alt=''
          />
        </div>
      </Carousel> */}
      <img
        src='/dchp2.jpg'
        className='w-full h-half-screen lg:bannerHeight '
        alt=''
      />
    </div>
  );
}

export default Banner;
