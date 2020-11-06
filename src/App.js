import React from 'react';
import './assets/css/styles.css';
import { Component } from 'react';
import Menu from './components/Menu.js';
import Main from './components/Main.js';
import Redes from './components/Redes.js';
import Move from './mainScript.js';
function App(){
    return(
    	<section>
    		<Menu/>
    		<Main/>
    		<Redes/>
    	</section>	
    );
  }

export default App;
