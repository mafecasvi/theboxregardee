import React from "react";
import Formularioestilos from "./formularioestilos.js";

function Formulario(props) {
	return (
		<div className="container">
			<div className="row">
				<div className="col-12">
					<form>
						<div className="formulariogeneral-formato">
							<div className="form-group form-short-text">
								<label className="label-title">Nombre de usuario</label>
								<input
									type="text"
									className="form-control input-format"
									name="username"
									placeholder="elige un nombre de usuario"
									required="required"
								/>
							</div>

							<div className="form-group form-short-text">
								<label className="label-title">Correo electronico</label>
								<input
									type="email"
									className="form-control input-format"
									name="email"
									placeholder="escribe tu correo electronico"
									required="required"
								/>
							</div>

							<div className="form-group form-short-text">
								<label className="label-title">Nombre</label>
								<input
									type="text"
									className="form-control input-format"
									name="name"
									placeholder="escribe tu primer y segundo nombre"
									required="required"
								/>
							</div>

							<div className="form-group form-short-text">
								<label className="label-title">Apellido</label>
								<input
									type="text"
									className="form-control input-format"
									name="lastname"
									placeholder="escribe tu primer y segundo nombre"
									required="required"
								/>
							</div>

							<div className="form-group form-calendar">
								<label className="label-title">Fecha de Nacimiento</label>
								<input
									type="date"
									className="form-control input-format"
									name="birthdate"
									placeholder="dd/mm/yyyy"
									required="required"
								/>
							</div>

							<div className="form-group form-short-text">
								<label className="label-title">Numero de celular</label>
								<input
									type="text"
									className="form-control input-format"
									name="mobilenumber"
									placeholder="041XXXXXXXX"
									required="required"
								/>
							</div>

							<div className="form-group form-long-text">
								<label htmlFor="address" className="label-title">
									Direccion
								</label>
								<textarea
									id="address"
									className="form-control input-format"
									name="address"
									placeholder="tu direccion lo mas concreta posible"
									required="required"
								/>
							</div>

							<div className="form-group form-long-text">
								<label className="label-title">Redes sociales referentes de estilo</label>
								<input
									type="text"
									className="form-control input-format"
									name="socialmedia"
									placeholder="escribe marcas e influencers"
									required="required"
								/>
							</div>

							<div className="form-group form-medium-text">
								<label className="label-title">Talla partes de arriba</label>
								<input
									type="text"
									className="form-control input-format"
									name="sizetop"
									placeholder="tallas que usas en blusas, franelas, sweaters"
									required="required"
								/>
							</div>

							<div className="form-group form-medium-text">
								<label className="label-title">Talla partes de abajo</label>
								<input
									type="text"
									className="form-control input-format"
									name="sizebottom"
									placeholder="tallas que usas en pantalones y jeans"
									required="required"
								/>
							</div>

							<div className="form-group form-medium-text">
								<label className="label-title">Talla de zapatos</label>
								<input
									type="text"
									className="form-control input-format"
									name="sizeshoes"
									placeholder="5, 6, 7, 35, 36, 37, etc."
									required="required"
								/>
							</div>

							<div className="form-group form-short-text">
								<label className="label-title">Perfil de IG</label>
								<input
									type="text"
									className="form-control input-format"
									name="igaccount"
									placeholder="@miperfil"
									required="required"
								/>
							</div>

							<div className="form-group form-number">
								<label className="label-title">Estatura</label>
								<input
									type="number"
									className="form-control input-format"
									name="height"
									placeholder="en cm, por ej. 165"
									required="required"
								/>
							</div>

							<div className="form-group form-number">
								<label className="label-title">Cintura</label>
								<input
									type="number"
									className="form-control input-format"
									name="waist"
									placeholder="en cm, por ej. 75"
									required="required"
								/>
							</div>

							<div className="form-group form-dropdown">
								<label htmlFor="arms" className="label-title">
									Brazos
								</label>
								<select
									id="arms"
									className="form-control input-format"
									name="armsuser"
									required="required">
									<option value="short">Cortos, a veces las mangas me quedan largas</option>
									<option value="average">Average</option>
									<option value="long">Elegantemente largos</option>
								</select>
							</div>

							<div className="form-group form-dropdown">
								<label htmlFor="shoulders" className="label-title">
									Espalda
								</label>
								<select
									id="shoulders"
									className="form-control input-format"
									type="text"
									name="shouldersuser"
									required="required">
									<option value="narrow">Estrecha</option>
									<option value="average">Promedio</option>
									<option value="wide">Ancha, de nadador pro</option>
								</select>
							</div>

							<div className="form-group form-dropdown">
								<label htmlFor="torso" className="label-title">
									Torso
								</label>
								<select
									id="torso"
									className="form-control input-format"
									type="text"
									name="torsouser"
									required="required">
									<option value="short">Un poco corto</option>
									<option value="average">Average</option>
									<option value="long">Un poco largo</option>
								</select>
							</div>

							<div className="form-group form-dropdown">
								<label htmlFor="hips" className="label-title">
									Caderas
								</label>
								<select
									id="hips"
									className="form-control input-format"
									type="text"
									name="hipsuser"
									required="required">
									<option value="narrow">Estrechas</option>
									<option value="average">Average</option>
									<option value="wide">Un poco anchas</option>
								</select>
							</div>

							<div className="form-dropdown">
								<label htmlFor="legs" className="label-title">
									Piernas
								</label>
								<select
									id="legs"
									className="form-control input-format"
									type="text"
									name="legsuser"
									required="required">
									<option value="short">Los pantalones siempre me quedan largos</option>
									<option value="average">Los pantalones me quedan OK</option>
									<option value="long">Los pantalones siempre me quedan cortos</option>
								</select>
							</div>
							<br />
							<div className="button-submit">
								<input type="button" value="Enviar datos personales" />
							</div>
							<br />
						</div>
					</form>
				</div>
			</div>
			<br />
			<div>
				<Formularioestilos />
			</div>
		</div>
	);
}

function Profileinformation() {
	console.log("Enviando datos personales");
}

export default Formulario;
