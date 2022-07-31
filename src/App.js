import Gallery from './Gallery';

import turtle_logo_white from './assets/turtle_logo_white.svg';
import assembly_daytime from './assets/assembly_daytime.png';
import assembly from './assets/assembly.png';
import heroImg_fg from './assets/hero_image.png';
import heroImg_bg from './assets/hero_blur.png';
import heroImg_title from './assets/hero_copy.svg';

import './brands.min.css';
import './App.css';

function App() {
    return (
        <div className="App">
            <header>
                <nav>
                    <a
                        href="https://www.instagram.com/simontheturtlecar/"
                        title="Check us out on Instagram!"
                        target="_blank"
                    >
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                </nav>

                <section className="hero-image-bg">
                    <img src={heroImg_bg} alt="" />
                </section>

                <section className="hero-image-text">
                    <div className="text-container">
                        <h1>SIMON</h1>
                        <h2>
                            THE<span></span>TURTLE
                        </h2>
                    </div>
                </section>

                <section className="hero-image-fg">
                    <img src={heroImg_fg} className="hero-image-fg" alt="" />
                </section>
            </header>

            {/* <img
                src={turtle_logo_white}
                className="logo-white"
                alt="white simon the turtle logo"
            /> */}
            {/* <div className="copy">
                <p>
                    After building HeadSpace in 2016, I decided to build a
                    smaller, more portable vehicle to be able to transport it
                    around to different events more easily. Working with an
                    amazing team of friends from Phoenix, AZ, we built an
                    electric, remote-controlled turtle: SIMON the TURTLE.
                </p>
                <p>
                    Two years later, we’ve refined the design so that it can
                    completely disassemble into the bed of a pickup truck.
                </p>
                <p>
                    SIMON the TURTLE is a Sensory Immersive Mobile Observation
                    Nest the Transforming Universal Remote-controlled
                    Load-bearing Electric vehicle.
                </p>
            </div> */}
            {/* <img
                src={assembly_daytime}
                className="assembly-daytime"
                alt="daytime simon"
            /> */}
            {/* <img src={assembly} className="assembly" alt="assembly" /> */}
            {/* <Gallery /> */}
        </div>
    );
}

export default App;
