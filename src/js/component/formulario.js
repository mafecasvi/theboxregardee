import React, { useState } from "react";

function validate(username, email, name, lastname,
    birthdate, mobilenumber, address,
    socialmedia, sizetop, sizebottom,
    sizeshoes, height, waist,
    armsuser, shouldersuser, torsouser, hipsuser,legsuser,
    budgettop, budgetbottom, budgetshoes) {
    const errors = [];

    if (enviarFormulario.username === "") {
        errors.push("Escribe un nombre de usuario");
    }
    if (enviarFormulario.email.length < 5) {
        errors.push("Escribe un correo electrónico");
    }
    if (enviarFormulario.name.length < 2) {
        errors.push("Falta tu nombre");
    }
    if (enviarFormulario.lastname.length < 2) {
        errors.push("Falta tu apellido");
    }
    if (enviarFormulario.birthdate === "") {
        errors.push("Falta tu fecha de nacimiento");
    }
    if (enviarFormulario.mobilenumber.length < 7) {
        errors.push("Falta tu número de celular");
    }
    if (enviarFormulario.address.length < 12) {
        errors.push("Escribe tu dirección completa");
    }
    if (enviarFormulario.sizetop === "") {
        errors.push("¿Cuáles son tus talla en partes de arriba?");
    }
    if (enviarFormulario.sizebottom === "") {
        errors.push("¿Cuáles son tus talla en partes de abajo?");
    }
    if (enviarFormulario.sizeshoes === "") {
        errors.push("Falta tu talla de zapatos");
    }
    if (enviarFormulario.height === "") {
        errors.push("Escribe tu altura");
    }
    if (enviarFormulario.waist === "") {
        errors.push("¿Cuánto mide tu cintura?");
    }
    if (enviarFormulario.armsuser === "") {
        errors.push("¿Cómo son tus brazos?");
    }
    if (enviarFormulario.shouldersuser === "") {
        errors.push("¿Cómo son tus brazos?");
    }
    if (enviarFormulario.torsouser === "") {
        errors.push("¿Cómo es tu torso?");
    }
    if (enviarFormulario.hipsuser === "") {
        errors.push("¿Cómo son tus caderas?");
    }
    if (enviarFormulario.legsuser === "") {
        errors.push("Falta un dato sobre el largo de tus piernas");
    }
    if (enviarFormulario.budgettop === "") {
        errors.push("Necesitamos conocer un presupuesto estimado");
    }
    if (enviarFormulario.budgetbottom === "") {
        errors.push("Necesitamos conocer un presupuesto estimado");
    }
    if (enviarFormulario.budgetshoes === "") {
        errors.push("Necesitamos conocer un presupuesto estimado");
    }
    return errors;
}

function Formulario() {
	const [fiveLooks, setFiveLooks] = useState(0);
	const [enviarFormulario, setEnviarFormulario] = useState({
		username: "",
		email: "",
		name: "",
		lastname: "",
		birthdate: "",
		mobilenumber: "",
		address: "",
		socialmedia: "",
		sizetop: "",
		sizebottom: "",
		sizeshoes: "",
		igaccount: "",
		height: "",
		waist: "",
		armsuser: "",
		shouldersuser: "",
		torsouser: "",
		hipsuser: "",
		legsuser: "",
		look1: "",
		look2: "",
		look3: "",
		look4: "",
		look5: "",
		look6: "",
		look7: "",
		look8: "",
		look9: "",
		look10: "",
		look11: "",
		look12: "",
		look13: "",
		look14: "",
		look15: "",
		look16: "",
		look17: "",
		look18: "",
		look19: "",
		look20: "",
		look21: "",
		look22: "",
		look23: "",
		look24: "",
		look25: "",
		look26: "",
		look27: "",
		look28: "",
		look29: "",
		look30: "",
		budgettop: "",
		budgetbottom: "",
		budgetshoes: "",
		budgetaccesories: ""
	});
	//guarda enel state los datos del formulario
	const handleFormulario = e => {
		setEnviarFormulario({
			...enviarFormulario,
			[e.target.name]: e.target.value
		});
	};
	//esta funcion cuenta los looks
	const handleChecked = prueba => {
		if (prueba) {
			setFiveLooks(fiveLooks + 1);
			console.log(fiveLooks, prueba);
		} else {
			setFiveLooks(fiveLooks - 1);
			console.log(fiveLooks, prueba);
		}
    };
    
 

	//funcion que guarda el formulario
	const guardarFormulario = e => {
		e.preventDefault();
        const {username, email, name, lastname,
			birthdate, mobilenumber, address,
			socialmedia, sizetop, sizebottom,
			sizeshoes, height, waist,
			armsuser, shouldersuser, torsouser, hipsuser,legsuser,
			budgettop, budgetbottom, budgetshoes} = this.state;
		//debes verificar si todos los campos estan llenos si no debes poner un error
        const errors
        

		//debes verificar si solo se seleccionaron 5 looks si no debes poner un error

		if (!setFiveLooks <= 6) {
			return;
		}
	};

	return (
		<div className="container">
			<h4>Usamos esta info para armar The Box lo más ajustada posible a tus necesidades</h4>
			<br />
			<div className="row">
				<div className="col-12">
					<form onSubmit={guardarFormulario}>
						<div className="formulariogeneral-formato">
							<div className="form-group form-short-text">
								<label className="label-title">Nombre de usuario</label>
								<input
									type="text"
									className="form-control input-format"
									name="username"
									placeholder="elige un nombre de usuario"
									onChange={handleFormulario}
								/>
							</div>

							<div className="form-group form-short-text">
								<label className="label-title">Correo electrónico</label>
								<input
									type="email"
									className="form-control input-format"
									name="email"
									placeholder="tu correo electrónico"
								/>
							</div>

							<div className="form-group form-short-text">
								<label className="label-title">Nombre</label>
								<input
									type="text"
									className="form-control input-format"
									name="name"
									placeholder="primer y segundo nombre"
								/>
							</div>

							<div className="form-group form-short-text">
								<label className="label-title">Apellido</label>
								<input
									type="text"
									className="form-control input-format"
									name="lastname"
									placeholder="apellidos"
								/>
							</div>

							<div className="form-group form-calendar">
								<label className="label-title">Fecha de Nacimiento</label>
								<input
									type="date"
									className="form-control input-format"
									name="birthdate"
									placeholder="dd/mm/yyyy"
								/>
							</div>

							<div className="form-group form-short-text">
								<label className="label-title">Número de celular</label>
								<input
									type="text"
									className="form-control input-format"
									name="mobilenumber"
									placeholder="041XXXXXXXX"
								/>
							</div>

							<div className="form-group form-long-text">
								<label htmlFor="address" className="label-title">
									Dirección
								</label>
								<textarea
									id="address"
									className="form-control input-format"
									name="address"
									placeholder="tu dirección, lo más concreta posible... sería genial si incluyes location"
								/>
							</div>

							<div className="form-group form-long-text">
								<label className="label-title">Redes sociales referentes de estilo</label>
								<input
									type="text"
									className="form-control input-format"
									name="socialmedia"
									placeholder="marcas e influencers que sean de tu estilo"
								/>
							</div>

							<div className="form-group form-medium-text">
								<label className="label-title">Talla partes de arriba</label>
								<input
									type="text"
									className="form-control input-format"
									name="sizetop"
									placeholder="tallas que usas en blusas, franelas, sweaters"
								/>
							</div>

							<div className="form-group form-medium-text">
								<label className="label-title">Talla partes de abajo</label>
								<input
									type="text"
									className="form-control input-format"
									name="sizebottom"
									placeholder="tallas que usas en pantalones y jeans"
								/>
							</div>

							<div className="form-group form-medium-text">
								<label className="label-title">Talla de zapatos</label>
								<input
									type="text"
									className="form-control input-format"
									name="sizeshoes"
									placeholder="5, 6, 7, 35, 36, 37, etc."
								/>
							</div>

							<div className="form-group form-short-text">
								<label className="label-title">Perfil de IG</label>
								<input
									type="text"
									className="form-control input-format"
									name="igaccount"
									placeholder="@miperfil"
								/>
							</div>

							<div className="form-group form-number">
								<label className="label-title">Estatura</label>
								<input
									type="number"
									className="form-control input-format"
									name="height"
									placeholder="en cm, por ej. 165"
								/>
							</div>

							<div className="form-group form-number">
								<label className="label-title">Cintura</label>
								<input
									type="number"
									className="form-control input-format"
									name="waist"
									placeholder="en cm, por ej. 75"
								/>
							</div>

							<div className="form-group form-dropdown">
								<label htmlFor="arms" className="label-title">
									Brazos
								</label>
								<select id="arms" className="form-control input-format" name="armsuser">
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
									name="shouldersuser">
									<option value="narrow">Estrecha</option>
									<option value="average">Promedio</option>
									<option value="wide">Ancha, de nadador pro</option>
								</select>
							</div>

							<div className="form-group form-dropdown">
								<label htmlFor="torso" className="label-title">
									Torso
								</label>
								<select id="torso" className="form-control input-format" type="text" name="torsouser">
									<option value="short">Un poco corto</option>
									<option value="average">Average</option>
									<option value="long">Un poco largo</option>
								</select>
							</div>

							<div className="form-group form-dropdown">
								<label htmlFor="hips" className="label-title">
									Caderas
								</label>
								<select id="hips" className="form-control input-format" type="text" name="hipsuser">
									<option value="narrow">Estrechas</option>
									<option value="average">Average</option>
									<option value="wide">Un poco anchas</option>
								</select>
							</div>

							<div className="form-dropdown">
								<label htmlFor="legs" className="label-title">
									Piernas
								</label>
								<select id="legs" className="form-control input-format" type="text" name="legsuser">
									<option value="short">Los pantalones siempre me quedan largos</option>
									<option value="average">Los pantalones me quedan OK</option>
									<option value="long">Los pantalones siempre me quedan cortos</option>
								</select>
							</div>
							<br />
							{/* <div className="button-submit">
								<input type="button" value="Enviar datos personales" />
							</div> */}
							<br />
						</div>
						<div>
							<div className="container row formulario-estilos-body">
								<div className="column">
									<h4>Elige los 5 looks que se parecen a ti</h4>
									<img src="look1.jpg" />
									<label className="checkbox-label">
										<input
											type="checkbox"
											name="look1"
											onClick={e => handleChecked(e.target.checked)}
										/>
										<i className="form-checkbox-button" />
										<span>Look 1</span>
									</label>

									<img src="look2.jpg" />
									<label className="checkbox-label">
										<input
											type="checkbox"
											name="look2"
											onClick={e => handleChecked(e.target.checked)}
										/>
										<i className="form-checkbox-button" />
										<span>Look 2</span>
									</label>

									<img src="look3.jpg" />
									<label className="checkbox-label">
										<input
											type="checkbox"
											name="look3"
											onChange={e => handleChecked(e.target.checked)}
										/>
										<i className="form-checkbox-button" />
										<span>Look 3</span>
									</label>

									<img src="look4.jpg" />
									<label className="checkbox-label">
										<input
											type="checkbox"
											name="look4"
											onChange={e => handleChecked(e.target.checked)}
										/>
										<i className="form-checkbox-button" />
										<span>Look 4</span>
									</label>

									<img src="look5.jpg" />
									<label className="checkbox-label">
										<input
											type="checkbox"
											name="look5"
											onChange={e => handleChecked(e.target.checked)}
										/>
										<i className="form-checkbox-button" />
										<span>Look 5</span>
									</label>

									<img src="look6.jpg" />
									<label className="checkbox-label">
										<input
											type="checkbox"
											name="look6"
											onChange={e => handleChecked(e.target.checked)}
										/>
										<i className="form-checkbox-button" />
										<span>Look 6</span>
									</label>

									<img src="look7.jpg" />
									<label className="checkbox-label">
										<input
											type="checkbox"
											name="look7"
											onChange={e => handleChecked(e.target.checked)}
										/>
										<i className="form-checkbox-button" />
										<span>Look 7</span>
									</label>

									<img src="look8.jpg" />
									<label className="checkbox-label">
										<input
											type="checkbox"
											name="look8"
											onChange={e => handleChecked(e.target.checked)}
										/>
										<i className="form-checkbox-button" />
										<span>Look 8</span>
									</label>

									<img src="look9.jpg" />
									<label className="checkbox-label">
										<input
											type="checkbox"
											name="look9"
											onChange={e => handleChecked(e.target.checked)}
										/>
										<i className="form-checkbox-button" />
										<span>Look 9</span>
									</label>

									<img src="look10.jpg" />
									<label className="checkbox-label">
										<input
											type="checkbox"
											name="look10"
											onChange={e => handleChecked(e.target.checked)}
										/>
										<i className="form-checkbox-button" />
										<span>Look 10</span>
									</label>
								</div>

								<div className="column">
									<img src="look10.jpg" />
									<label className="checkbox-label">
										<input
											type="checkbox"
											name="look11"
											onClick={e => handleChecked(e.target.checked)}
										/>
										<i className="form-checkbox-button" />
										<span>Look 11</span>
									</label>

									<img src="look11.jpg" />
									<label className="checkbox-label">
										<input
											type="checkbox"
											name="look12"
											onClick={e => handleChecked(e.target.checked)}
										/>
										<i className="form-checkbox-button" />
										<span>Look 12</span>
									</label>

									<img src="look12.jpg" />
									<label className="checkbox-label">
										<input
											type="checkbox"
											name="look13"
											onClick={e => handleChecked(e.target.checked)}
										/>
										<i className="form-checkbox-button" />
										<span>Look 13</span>
									</label>

									<img src="look13.jpg" />
									<label className="checkbox-label">
										<input
											type="checkbox"
											name="look14"
											onClick={e => handleChecked(e.target.checked)}
										/>
										<i className="form-checkbox-button" />
										<span>Look 14</span>
									</label>

									<img src="look14.jpg" />
									<label className="checkbox-label">
										<input
											type="checkbox"
											name="look15"
											onClick={e => handleChecked(e.target.checked)}
										/>
										<i className="form-checkbox-button" />
										<span>Look 15</span>
									</label>

									<img src="look15.jpg" />
									<label className="checkbox-label">
										<input
											type="checkbox"
											name="look16"
											onClick={e => handleChecked(e.target.checked)}
										/>
										<i className="form-checkbox-button" />
										<span>Look 16</span>
									</label>

									<img src="look16.jpg" />
									<label className="checkbox-label">
										<input
											type="checkbox"
											name="look17"
											onClick={e => handleChecked(e.target.checked)}
										/>
										<i className="form-checkbox-button" />
										<span>Look 17</span>
									</label>

									<img src="look17.jpg" />
									<label className="checkbox-label">
										<input
											type="checkbox"
											name="look18"
											onClick={e => handleChecked(e.target.checked)}
										/>
										<i className="form-checkbox-button" />
										<span>Look 18</span>
									</label>

									<img src="look18.jpg" />
									<label className="checkbox-label">
										<input
											type="checkbox"
											name="look19"
											onClick={e => handleChecked(e.target.checked)}
										/>
										<i className="form-checkbox-button" />
										<span>Look 19</span>
									</label>

									<img src="look19.jpg" />
									<label className="checkbox-label">
										<input
											type="checkbox"
											name="look20"
											onClick={e => handleChecked(e.target.checked)}
										/>
										<i className="form-checkbox-button" />
										<span>Look 20</span>
									</label>
								</div>

								<div className="column">
									<img src="look21.jpg" />
									<label className="checkbox-label">
										<input
											type="checkbox"
											name="look21"
											onClick={e => handleChecked(e.target.checked)}
										/>
										<i className="form-checkbox-button" />
										<span>Look 21</span>
									</label>

									<img src="look22.jpg" />
									<label className="checkbox-label">
										<input
											type="checkbox"
											name="look22"
											onClick={e => handleChecked(e.target.checked)}
										/>
										<i className="form-checkbox-button" />
										<span>Look 22</span>
									</label>

									<img src="look23.jpg" />
									<label className="checkbox-label">
										<input
											type="checkbox"
											name="look23"
											onClick={e => handleChecked(e.target.checked)}
										/>
										<i className="form-checkbox-button" />
										<span>Look 23</span>
									</label>

									<img src="look24.jpg" />
									<label className="checkbox-label">
										<input
											type="checkbox"
											name="look24"
											onClick={e => handleChecked(e.target.checked)}
										/>
										<i className="form-checkbox-button" />
										<span>Look 24</span>
									</label>

									<img src="look25.jpg" />
									<label className="checkbox-label">
										<input
											type="checkbox"
											name="look25"
											onClick={e => handleChecked(e.target.checked)}
										/>
										<i className="form-checkbox-button" />
										<span>Look 25</span>
									</label>

									<img src="look26.jpg" />
									<label className="checkbox-label">
										<input
											type="checkbox"
											name="look26"
											onClick={e => handleChecked(e.target.checked)}
										/>
										<i className="form-checkbox-button" />
										<span>Look 26</span>
									</label>

									<img src="look27.jpg" />
									<label className="checkbox-label">
										<input
											type="checkbox"
											name="look27"
											onClick={e => handleChecked(e.target.checked)}
										/>
										<i className="form-checkbox-button" />
										<span>Look 27</span>
									</label>

									<img src="look28.jpg" />
									<label className="checkbox-label">
										<input
											type="checkbox"
											name="look28"
											onClick={e => handleChecked(e.target.checked)}
										/>
										<i className="form-checkbox-button" />
										<span>Look 28</span>
									</label>

									<img src="look29.jpg" />
									<label className="checkbox-label">
										<input
											type="checkbox"
											name="look29"
											onClick={e => handleChecked(e.target.checked)}
										/>
										<i className="form-checkbox-button" />
										<span>Look 29</span>
									</label>

									<img src="look30.jpg" />
									<label className="checkbox-label">
										<input
											type="checkbox"
											name="look30"
											onClick={e => handleChecked(e.target.checked)}
										/>
										<i className="form-checkbox-button" />
										<span>Look 30</span>
									</label>
								</div>
								<br />
								{/* <input type="button" value="Enviar estilos preferidos" /> */}
								<br />
							</div>
							<h5>Ahora, hablemos de cuánto estás dispuest@ a pagar...</h5>
							<div className="formulario-budget">
								<div className="form-group">
									<label className="label-title">Presupuesto partes de arriba</label>
									<input className="form-control" type="text" name="budgettop" placeholder="en USD" />
								</div>

								<div className="form-group">
									<label className="label-title">Presupuesto partes de abajo</label>
									<input
										className="form-control"
										type="text"
										name="budgetbottom"
										placeholder="en USD"
									/>
								</div>

								<div className="form-group">
									<label className="label-title">Presupuesto para zapatos</label>
									<input
										className="form-control"
										type="text"
										name="budgetshoes"
										placeholder="en USD"
									/>
								</div>

								<div className="form-group">
									<label className="label-title">Presupuesto para carteras</label>
									<input
										className="form-control"
										type="text"
										name="budgetbags"
										placeholder="en USD"
									/>
								</div>

								<div className="form-group">
									<label className="label-title">Presupuesto para accesorios</label>
									<input
										className="form-control"
										type="text"
										name="budgetaccesories"
										placeholder="en USD"
									/>
								</div>

								<div className="button-submit">
									{/* <input type="button" onClick="budgetsubmission()" value="Enviar presupuesto" /> */}
								</div>
							</div>
						</div>
						<div className="button-submit">
							<br />
							<input
								type="submit"
								className="btn btn-success btn-block"
								value="Enviar toda la info de mi perfil"
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

function Profileinformation() {
	console.log("Enviando datos personales");
}

export default Formulario;
