import './App.css';
import Header from './components/Header';
import Content from './components/Content/Content';
import React, { useState } from 'react';


const App= () => {
  const [selectedOption, setSelectedOption] = useState({ value: 1, label: "Microsoft Project" });
  let val;

  if (selectedOption != null) {
    val = selectedOption.value;
  }


  const propStateF = (value) => {
    setSelectedOption(value);
  }
  
  return (<div className='App'>
    <Header selected={selectedOption} fff={propStateF} />
    <Content selected={val} />
  </div>);
}

export default App;
