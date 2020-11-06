import React, {Component} from 'react';
import '../assets/css/styles.css';

class Main extends Component{
	render(){
		return(
		<div className="container">
					
				<div className="title-banner"></div>
				<div class="content">
					<div class="articulo" id="primero"><h3>Disfrute su casa como nunca antes!</h3>
					<p>Este verano viva el sueño de la pileta propia, DN piletas te ayuda!</p></div>
					<div className="articulo" id="segundo"><h3>Calidad y experiencia</h3>
						<p>Nuestros instaladores poseen años de experiencia, confíe en nosotros para instalar su pileta.</p></div>
					<div class="articulo" id="tercero"><h3>Facilidades de pago</h3>
						<p>Acceda al plan de pago mas conveniente, recibimos tarjetas de crédito y financiación propia</p></div>
					<div className="articulo" id="cuarto"><h3>Asistencia y asesoramiento</h3>
						<p>Instalación completa, incluye el sistema de filtrado completo. Trabajo y equipos garantizados.</p></div>
				</div>

					
				</div>
				);
	}
}

export default Main;