import React from "react";

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
								<label className="label-title">Correo electrónico</label>
								<input
									type="email"
									className="form-control input-format"
									name="email"
									placeholder="tu correo electrónico"
									required="required"
								/>
							</div>

							<div className="form-group form-short-text">
								<label className="label-title">Nombre</label>
								<input
									type="text"
									className="form-control input-format"
									name="name"
									placeholder="primer y segundo nombre"
									required="required"
								/>
							</div>

							<div className="form-group form-short-text">
								<label className="label-title">Apellido</label>
								<input
									type="text"
									className="form-control input-format"
									name="lastname"
									placeholder="apellidos"
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
								<label className="label-title">Número de celular</label>
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
									placeholder="tu dirección, lo más concreta posible... sería genial si incluyes location"
									required="required"
								/>
							</div>

							<div className="form-group form-long-text">
								<label className="label-title">Redes sociales referentes de estilo</label>
								<input
									type="text"
									className="form-control input-format"
									name="socialmedia"
									placeholder="marcas e influencers que sean de tu estilo"
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
							{/* <div className="button-submit">
								<input type="button" value="Enviar datos personales" />
							</div> */}
							<br />
						</div>
						<div>
							<div className="container row formulario-estilos-body">
								<div className="column">
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

							<div className="formulario-budget">
								<div className="form-group">
									<label className="label-title">Presupuesto partes de arriba</label>
									<input
										className="form-control"
										type="text"
										name="budgettop"
										placeholder="en USD"
										required="required"
									/>
								</div>

								<div className="form-group">
									<label className="label-title">Presupuesto partes de abajo</label>
									<input
										className="form-control"
										type="text"
										name="budgetbottom"
										placeholder="en USD"
										required="required"
									/>
								</div>

								<div className="form-group">
									<label className="label-title">Presupuesto para zapatos</label>
									<input
										className="form-control"
										type="text"
										name="budgetshoes"
										placeholder="en USD"
										required="required"
									/>
								</div>

								<div className="form-group">
									<label className="label-title">Presupuesto para carteras</label>
									<input
										className="form-control"
										type="text"
										name="budgetbags"
										placeholder="en USD"
										required="required"
									/>
								</div>

								<div className="form-group">
									<label className="label-title">Presupuesto para accesorios</label>
									<input
										className="form-control"
										type="text"
										name="budgetaccesories"
										placeholder="en USD"
										required="required"
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
								type="button"
								className="btn btn-success btn-block"
								value="Enviar toda la info de mi perfil"
							/>
						</div>
					</form>
				</div>
			</div>
			<br />
		</div>
	);
}

function Profileinformation() {
	console.log("Enviando datos personales");
}

export default Formulario;
