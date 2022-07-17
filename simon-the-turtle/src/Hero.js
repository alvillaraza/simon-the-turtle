import hero_blur from "./assets/hero_blur.png";
import hero_image from "./assets/hero_image.png";
import instagram from './assets/instagram.svg'

const Hero = () => {
  return (
    <section>
      <img src={instagram} alt="instagram logo" />
      <img src={hero_blur} alt="blurry hero image" />

      <img src={hero_image} alt="simon the turtle" />
    </section>
  );
};

export default Hero