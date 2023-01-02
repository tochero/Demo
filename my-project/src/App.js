import './App.css';
import {FaDev, FaCameraRetro} from 'react-icons/fa'
function App() {
  return (
    <div className="App">
        <div>
          <FaDev className='text-cyan-500' size={30}/>
          <FaCameraRetro className='text-lime-600' size={40} />
          <h1 className='text-red-500'>i am the one</h1>
        </div>
    </div>
  );
}

export default App;
