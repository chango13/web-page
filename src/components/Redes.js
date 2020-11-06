import React, {Component} from 'react'
import '../assets/css/styles.css'
import wsp from "../assets/images/whatsapp.png";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";


class Redes extends Component{

	render(){
		return(
					<div className="redes">
						<a href="https://www.facebook.com/dn.piletas" target="_blanck"><img src={ facebook }/></a>
						<a href="https://www.instagram.com/dn_piletas/?hl=es-la" target="_blanck"><img src={ instagram }/></a>
						<a href="https://api.whatsapp.com/send?phone=5493442482753&text=Hola!%20Somos%20DN%20Piletas.%20Cual%20es%20tu%20consulta?" target="_blanck"><img src={ wsp }/></a>
						<div className="contact-container">
						<div className="contacto" id="contact">
							<h2>Teléfono: 03442-15482753 </h2>
						</div>
						<div className="copyright">
							<h3>&copy; DN Piletas 2020</h3>
						<h4>&copy; 2020 SoftService</h4>
						</div>
						</div>
					</div>
					);
				}
			}

			export default Redes;