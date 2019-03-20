import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton'
import ActionButton from './components/ButtonComponents/ActionButton'
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'

const App = () => {
  return (
	 <div className="app-container">
	    <CalculatorDisplay/>
	    <div className="bottomPanel">
            <div className="numberButtonContainer">
				<ActionButton buttonStyle="action" text="CLEAR"/>
                <NumberButton buttonStyle="white" text="1"/>
                <NumberButton buttonStyle="white" text="2"/>
                <NumberButton buttonStyle="white" text="3"/>
                <NumberButton buttonStyle="white" text="4"/>
                <NumberButton buttonStyle="white" text="5"/>
                <NumberButton buttonStyle="white" text="6"/>
                <NumberButton buttonStyle="white" text="7"/>
                <NumberButton buttonStyle="white" text="8"/>
                <NumberButton buttonStyle="white" text="9"/>
				<ActionButton buttonStyle="action" text="0"/>
            </div>
             <div className="actionButtonContainer">
                 <NumberButton buttonStyle="red" text="/"/>
                 <NumberButton buttonStyle="red" text="X"/>
                 <NumberButton buttonStyle="red" text="-"/>
                 <NumberButton buttonStyle="red" text="+"/>
                 <NumberButton buttonStyle="red" text="="/>
             </div>
        </div>
     </div>
  );
};

export default App;
