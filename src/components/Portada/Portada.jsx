import WinPortada from '../../img/WinPortada.jpg';
import WinPortada2 from '../../img/WinPortada2.jpg';
import WinPortada3 from '../../img/WinPortada3.jpg';
import WinPortada4 from '../../img/WinPortada4.jpg';
import WinPortadaCel from '../../img/WinPortadaCel.jpg';
import WinPortadaCel2 from '../../img/WinPortadaCel2.jpg';
import WinPortadaCel3 from '../../img/WinPortadaCel3.jpg';
import WinPortadaCel4 from '../../img/WinPortadaCel4.jpg';
import 'rsuite/dist/rsuite-no-reset.min.css';
import { Carousel } from 'rsuite';
import './Portada.css';

export default function Portada() {
  return (
    <div className=''>
    <Carousel autoplay className="Showcase custom-slider">
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
    </Carousel>


    </div>
  )
}
