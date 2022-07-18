import hero_image from './assets/hero_image.png'
import hero_blur from "./assets/hero_blur.png";
import hero_image_title from "./assets/hero_image_title.jpeg";

const Hero = () => {
  return (
    <section className='hero-image'>
      <img src={hero_image} className='hero-image-front' alt='hero' />
      <img src={hero_blur} alt="blurry hero" />
      {/* <img src={hero_image_title} alt="simon the turtle" /> */}
      
    </section>
  );
};

export default Hero;