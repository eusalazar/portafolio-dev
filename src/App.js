import './App.css';
import MisRutas from './Routes/MisRutas';
import React, {useContext} from 'react';
import {Context}  from './Componentes/Wrapper';


function App(props) {
  const context = useContext(Context);
  console.log(context)

  return (
    <div>
      <div>
      <select value = {context.locale} onChange={context.selectLanguage}>
        <option value= 'en'>English</option>
        <option value= 'es'>Spanish</option>
      </select>
      </div>
    <div className='layout'>
      <MisRutas/>
    </div>
    </div>
  );
}

export default App;
