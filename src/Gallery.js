import nighttime0 from "./assets/images/0nighttime.JPG";
import nighttime1 from "./assets/images/1nighttime.JPG";
import daytime2 from "./assets/images/2daytime.JPG";
import nighttime3 from "./assets/images/3nighttime.JPG";
import nighttime4 from "./assets/images/4nighttime.JPG";
import nighttime5 from "./assets/images/5nighttime.JPG";

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
