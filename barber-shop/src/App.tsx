import React, { Component }  from 'react';
import photoLogin from './assets/login.png'
import Routes from './routes/routes'
import { Input } from "./components/input/input";
import styles from 'login.module.scss';

function App() {
  return (
    <div>
      hello world AAA teste
      <img src={photoLogin}></img>
     
        <Input placeholder="E-mail" /> 
        <Input placeholder='Senha'/> 
    </div>
  );
}

export default App;
