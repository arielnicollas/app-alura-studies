import React from 'react';
import Button from '../components/button/button';
import Formulario from '../components/formulario/formulario';
import Lista from '../components/lista';
import style from'./App.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario />
      <Lista />
    </div>
  );
}

export default App;
