import React, { Component }  from 'react';
import photoLogin from './assets/login.png'
import Routes from './routes/routes'
import { Input } from "./components/input/input";

function App() {
  return (
    <div>
      hello world AAA
      <img src={photoLogin}></img>
      <Input placeholder="Teste"> </Input>
    </div>
  );
}

export default App;
