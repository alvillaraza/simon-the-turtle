import nighttime0 from './assets/0nighttime.JPG';
import nighttime1 from './assets/1nighttime.JPG';
import daytime2 from './assets/2daytime.JPG';
import nighttime3 from './assets/3nighttime.JPG';
import nighttime4 from './assets/4nighttime.JPG';
import nighttime5 from './assets/5nighttime.JPG';

const Gallery = () => {
    return (
        <section className="gallery-container">
            <div className="image-container">
                <img src={nighttime0} alt="" />
            </div>
            <div className="image-container">
                <img src={nighttime1} alt="" />
            </div>
            <div className="image-container">
                <img src={daytime2} alt="" />
            </div>
            <div className="image-container">
                <img src={nighttime3} alt="" />
            </div>
            <div className="image-container">
                <img src={nighttime4} alt="" />
            </div>
            <div className="image-container">
                <img src={nighttime5} alt="" />
            </div>
        </section>
    );
};

export default Gallery;
