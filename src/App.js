
//import './App.css';
import'./styles.css'
import Header from './Header';
import Main from './Main'
import Footer from './Footer';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
   
      <Header /> 
      <Main />
      <Specials/>
      <Testimonials/>
      <About/>
      <Footer /> 
   </>
  );
}

export default App;
