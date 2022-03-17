import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Catagories from './components/Catagories/Catagories';
import Catagory from './components/Catagory/Catagory';

function App() {
  return (
    <div className="App container">
      <Header></Header>
      <Catagories></Catagories>
      
    </div>
  );
}

export default App;
