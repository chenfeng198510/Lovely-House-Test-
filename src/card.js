import logo from './logo.svg';
import './App.css';
import cardimages from "../src/images.jpg"
const CssinReact = () => {
  return (
    <section>
      <h1>Card
      </h1>
      <section className="card">
      <img src={cardimages} />
      </section>
    </section>
  )
}

export default CssinReact;