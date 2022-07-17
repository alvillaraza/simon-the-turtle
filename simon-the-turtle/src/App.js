import Hero from './Hero'
import turtle_logo_white from "./assets/turtle_logo_white.svg"
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hero />
       
        <img src={turtle_logo_white} alt="white simon the turtle logo" />
        <p>
          After building HeadSpace in 2016, I decided to build a smaller, more
          portable vehicle to be able to transport it around to different events
          more easily. Working with an amazing team of friends from Phoenix, AZ,
          we built an electric, remote-controlled turtle: SIMON the TURTLE.
        </p>
        <p>
          Two years later, we’ve refined the design so that it can completely
          disassemble into the bed of a pickup truck.
        </p>
        <p>
          SIMON the TURTLE is a Sensory Immersive Mobile Observation Nest the
          Transforming Universal Remote-controlled Load-bearing Electric
          vehicle.
        </p>
      </header>
    </div>
  );
}

export default App;
