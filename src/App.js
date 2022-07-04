
import './App.css';
import Footer from './Footer';
import Header from './Header.js';
import Home from './Home';
import UnderNavBar from './UnderNavBar';


function App() {
  return (
    //BEM
    <div className="app">
     
   <Header/>
   <UnderNavBar/>
   <Home />
   <Footer/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
