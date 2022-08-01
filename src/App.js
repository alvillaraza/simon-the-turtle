import Gallery from './Gallery';

import heroImg_fg from './assets/hero_image.png';
import heroImg_bg from './assets/hero_blur.png';
import turtle_logo_white from './assets/turtle-camp-logo.png';
import assembly_daytime from './assets/assembly_daytime.png';
import assembly from './assets/assembly.png';
import turtleCamp_logo_color from './assets/TurtleCamp_FINALS-01.png';
import footerImg_bg from './assets/footerbanner.JPG';

import './brands.min.css';
import './App.css';

function App() {
    return (
        <div className="App">
            <nav>
                <a
                    href="https://www.instagram.com/simontheturtlecar/"
                    title="Check us out on Instagram!"
                    target="_blank"
                >
                    <i className="fa-brands fa-instagram"></i>
                </a>
            </nav>

            <header>
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

            <section className="turtle-logo-container">
                <div className="turtle-logo-circle">
                    <img
                        src={turtle_logo_white}
                        className="logo-white"
                        alt="white simon the turtle logo"
                    />
                </div>
            </section>

            <section className="intro-container">
                <p>
                    After building HeadSpace in 2016, I decided to build a
                    smaller, more portable vehicle to be able to transport it
                    around to different events more easily. Working with an
                    amazing team of friends from Phoenix, AZ, we built an
                    electric, remote-controlled turtle: SIMON the TURTLE.
                </p>
                <p>
                    Two years later, we've refined the design so that it can
                    completely disassemble into the bed of a pickup truck.
                </p>
                <p>
                    <small>
                        SIMON the TURTLE is a Sensory Immersive Mobile
                        Observation Nest the Transforming Universal
                        Remote-controlled Load-bearing Electric vehicle.
                    </small>
                </p>
            </section>

            <section className="simon-and-the-crew-container">
                <div className="black-bevel"></div>
                <img src={assembly} className="simon-schema" alt="" />
                <img
                    src={assembly_daytime}
                    className="simon-and-the-crew"
                    alt=""
                />
            </section>

            {/* <Gallery /> */}

            <footer>
                <img
                    src={turtleCamp_logo_color}
                    className="turtle-camp-logo"
                    alt=""
                />
                <img src={footerImg_bg} className="footer-bg" alt="" />
            </footer>
        </div>
    );
}

export default App;
