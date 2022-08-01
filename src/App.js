import './App.css';
import Nav from './Nav';
import HeroSection from './HeroSection';
import PortfolioSect from './PortfolioSect';
import About from './About';
// import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>saga here</h1>
      <Nav/>
      <HeroSection/>
      <PortfolioSect/>
      <About/>
      {/* <Footer/> */}
      </header>
    </div>
  );
}

export default App;
