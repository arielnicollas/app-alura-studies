import React from 'react';
import Button from '../components/button/button';
import Formulario from '../components/formulario/formulario';
import Lista from '../components/lista';
import './style.scss';

function App() {
  return (
    <div className="AppStyle">
      <Formulario />
      <Lista />
    </div>
  );
}

export default App;
