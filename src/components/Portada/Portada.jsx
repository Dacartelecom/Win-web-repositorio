import WinPortada from '../../img/WinPortada.jpg';
import WinPortada2 from '../../img/WinPortada2.jpg';
import WinPortada3 from '../../img/WinPortada3.jpg';
import WinPortada4 from '../../img/WinPortada4.jpg';
import WinPortadaCel from '../../img/WinPortadaCel.jpg';
import WinPortadaCel2 from '../../img/WinPortadaCel2.jpg';
import WinPortadaCel3 from '../../img/WinPortadaCel3.jpg';
import WinPortadaCel4 from '../../img/WinPortadaCel4.jpg';
import Carousel from '../Carousel/Carousel';
// import 'rsuite/dist/rsuite-no-reset.min.css';
// import { Carousel } from 'rsuite';
// import './Portada.css';

const OPTIONS = {
  loop: true,
  slidesToScroll: 'auto',
  containScroll: 'trimSnaps'
};
const SLIDE_COUNT = 4;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
const STYLES_MOBILE = {
  height: '640px'
};
const STYLES_DESKTOP = {
  aspectRatio: 3.095,
  width: "100%",
  height: "auto",
  objectFit: "cover"
};

const imagesDesktop = [
  WinPortada,
  WinPortada2,
  WinPortada3,
  WinPortada4,
];

const imagesMobile = [
  WinPortadaCel,
  WinPortadaCel2,
  WinPortadaCel3,
  WinPortadaCel4,
];

export default function Portada() {
  return (
    <div className=''>
      {/* <Carousel autoplay autoplayInterval={5000} className="Showcase custom-slider">
        <img src={WinPortada} />
        <img src={WinPortada2}  />
        <img src={WinPortada3}  />
        <img src={WinPortada4}  />
      </Carousel>

      <Carousel autoplay className="ShowcaseMobile custom-slider">
        <img src={WinPortadaCel} />
        <img src={WinPortadaCel2}  />
        <img src={WinPortadaCel3}  />
        <img src={WinPortadaCel4}  />
      </Carousel> */}

      <Carousel
        classNameSlide="embla__slide"
        slides={ SLIDES }
        images={ imagesMobile }
        options={ OPTIONS }
        haveButtons={ true }
        haveDots={ true }
        styles={ STYLES_MOBILE }
        className="mobile"
        interval={ 5000 }
      />

      <Carousel
        classNameSlide="embla__slide"
        slides={ SLIDES }
        images={ imagesDesktop }
        options={ OPTIONS }
        haveButtons={ true }
        haveDots={ true }
        styles={ STYLES_DESKTOP }
        className="desktop"
        interval={ 5000 }
      />

    </div>
  )
}
