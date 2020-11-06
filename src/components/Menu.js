import React, {Component} from 'react';
import '../assets/css/styles.css';
import icono from "../assets/images/icono.png";
import Move from '../mainScript';

class Menu extends Component{
	render(){
		return(
				<div className="menu" onclick="Move()">
					<div className="button">
						<div className="bar" id="bar1"></div>
						<div className="bar" id="bar2"></div>
						<div className="bar" id="bar3"></div>
					</div>
					<div className="box" id="item">

						<div className="menu-item"><a href="">INICIO</a></div>
						<div className="menu-item"><a href="#">MODELOS</a></div>
						<div className="menu-item"><a href="aboutus.html">NOSOTROS</a></div>
						<div className="menu-item"><a href="#contact">CONTACTO</a></div>
						<div className="logo"><img src={ icono }/></div>
					</div>
				</div>
				);
			}
		}

	export default Menu; 