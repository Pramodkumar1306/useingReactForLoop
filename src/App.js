import ForLoop from './componant/forLoop';
import React, { useState } from 'react';
import './App.css';
import Shoescomp from './componant/Shoescomp';
import Newcomponant from './componant/Newcomponant';






// import componantName from './componant.js';
function App() {
  return (
    <div  className='px-20'>
      < Shoescomp/>
      <ForLoop />
      <Newcomponant/>
    </div>
  );
}

export default App;
