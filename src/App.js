import logo from './logo.svg';
import './App.css';
import cardimages from "../src/images.jpg"

function App() {
  return (
    <div className="App">
      <section>
      <h1 className="cardh1">My Card
      </h1>
      <section className="card">
      <img className="card-image" src={cardimages} />
      <h5 className="card-title">"I know the card is ugly.<br></br>
      However, I give up to adjust <br></br>color and sytle,<br></br>
       because I am a lazy man. <br></br>
       Please forgive me."
       </h5>
      <h6 className="Cardname">
        Chen Feng
      </h6>
      <h7 className="Location">
        Software Developer, Bunaby
      </h7>
      </section>
    </section>
    </div>
  );
}

export default App;

