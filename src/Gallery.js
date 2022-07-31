import nighttime0 from './assets/0nighttime.JPG';
import nighttime1 from './assets/1nighttime.JPG';
import daytime2 from './assets/2daytime.JPG';
import nighttime3 from './assets/3nighttime.JPG';
import nighttime4 from './assets/4nighttime.JPG';
import nighttime5 from './assets/5nighttime.JPG';

const Gallery = () => {
    return (
        <section>
            <img src={nighttime0} alt="nighttime" />
            <img src={nighttime1} alt="daytime" />
            <img src={daytime2} alt="nighttime" />
            <img src={nighttime3} alt="nighttime" />
            <img src={nighttime4} alt="nighttime" />
            <img src={nighttime5} alt="nighttime" />
        </section>
    );
};

export default Gallery;
