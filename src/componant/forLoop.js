import React, { useState } from 'react';
import './forLop.css'; // Importing CSS for animations

const LoopVisualizer = () => {
  const [step, setStep] = useState(0); // Tracks the current step
  const [i, setI] = useState(0);       // Tracks the loop variable
  const [output, setOutput] = useState(''); // Displays the current output of the loop

  const handleClick = () => {
    if (step === 0) {
      // Initialization: i = 0
      setOutput('i = 0');
      setStep(1);
    } else if (step === 1) {
      // Condition check: i <= 10
      setOutput(`i <= 10`);
      setStep(2);
    } else if (step === 2) {
      // Console log: console.log(i)
      console.log(i);
      setOutput(`console.log(${i})`);
      setStep(3);
    } else if (step === 3) {
      // Increment: i++
      setI(i + 1); // Increment i
      if (i + 1 <= 10) {
        setStep(0); // Loop back to the first step if i <= 10
      } else {
        setOutput('Loop completed.');
        setStep(4); // End of the loop after i reaches 10
      }
    }
  };

  return (
    <div className="container">
      <h3>
        <span className={step === 0 ? 'underline' : ''}>i = {i}</span> 
        <span className={step === 1 ? 'underline' : ''}>i &lt;= 10</span>
        <span className={step === 2 ? 'underline' : ''}>console.log({i})</span>
        <span className={step === 3 ? 'underline' : ''}>i++</span>
      </h3>
      <button onClick={handleClick}>Next Step</button>
      <div className="console">
        <pre>{output}</pre>
      </div>
    </div>
  );
};

export default LoopVisualizer;
