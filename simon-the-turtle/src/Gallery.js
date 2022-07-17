import nighttime0 from "./assets/images/0nighttime.JPG";
import nighttime1 from "./assets/images/1nighttime.JPG";
import daytime2 from "./assets/images/2daytime.JPG";
import nighttime3 from "./assets/images/3nighttime.JPG";
import nighttime4 from "./assets/images/4nighttime.JPG";
import nighttime5 from "./assets/images/5nighttime.JPG";

const Gallery = () => {
  return (
    <section>
      <img src={nighttime0} alt="nighttime image" />
      <img src={nighttime1} alt="daytime image" />
      <img src={daytime2} alt="nighttime image" />
      <img src={nighttime3} alt="nighttime image" />
      <img src={nighttime4} alt="nighttime image" />
      <img src={nighttime5} alt="nighttime image" />
    </section>
  );
};

export default Gallery;
