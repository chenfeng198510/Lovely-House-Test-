import './App.css';
import Navbar from './navbar';
import hqdefault from '../src/hqdefault.jpg'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="house" key={postMessage.id}>
<img src={hqdefault} alt="A house" height={1000} width={1000}/>

</div>
    </div>
  );
}

export default App;
