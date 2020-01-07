import React from 'react';
import Counter from '../counter';
import Results from '../Results';
import './App.css';

function App() {
  return (
    <div className="App">
     <Counter />
		 <div className="divider"></div>
		 <Results />
    </div>
  );
}

export default App;
