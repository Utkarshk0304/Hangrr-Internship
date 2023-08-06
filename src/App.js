import image1 from './images/suit.webp'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Buttons from './components/Buttons/Buttons';
import React, {Fragment } from 'react';
import AddToCart from './components/AddToCart/AddToCart';
import PriceSection from './components/PriceSection/PriceSection';

function App() {
  return (<React.Fragment>
    <Navbar >
      
    </Navbar>


    <div className='button-image'>
      <div className='img'><img src={image1} alt='suit' id="suitImage"></img></div>
      <div >
        <PriceSection class="price-section"></PriceSection>
        <Buttons className="RightSideSection"></Buttons>
        <AddToCart className='AddToCart'></AddToCart>

      </div>


    </div>
    
  </React.Fragment>

  );
}

export default App;
