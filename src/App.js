import React from 'react';
import logo from './logo.svg';
import './App.css';

import ClockComponent from './ClockComponent/ClockComponent';
import DateComponent from './ClockComponent/DateComponent';
import ChooseTheme from './ChooseThemeComponent/ChooseTheme';
import Dock from "./components/Dock"
import SplashScreen from './SplashScreen/SplashScreen';

function App() {
  return (
    <div className='App'>
      <ChooseTheme /> 
      <div className='font-face'>
        <header className='App-header'>
          <ClockComponent />
          <DateComponent />
          <SplashScreen />
          <Dock />
        </header>
      </div>
    </div>
  );
}

export default App;
