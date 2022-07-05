
import './App.css';
import Footer from './Footer';
import Header from './Header.js';
import Home from './Home';
import UnderNavBar from './UnderNavBar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


function App() {
 
  return (
    //BEM
    <Router>
    <div className="app">
    <Header/>
     <Routes>
        
        <Route path = '/checkout' element = {[ <UnderNavBar/>,<h1>I am Checkout,Smash the Like Button</h1>,<Footer/>]}/> 
        <Route path = '/' element = {[ <UnderNavBar/>,<Home />,<Footer/>]}/> 
   </Routes>
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
    </Router>
  );
}

export default App;
