import React, {  useState } from 'react';
import './App.css';
import ListOfGifts from './componentes/ListOfGifts';

function App() {
  const [keyword, setKeyword] = useState('vader')
  return (
    <div className="App">
      <section className='App-content'>
        <button onClick={()=>
            setKeyword('mapache')
        } >Cambiar keyword</button>
          <ListOfGifts keyword={keyword}/>
        
      </section>
    </div>
  );
}

export default App;
