import React from "react";

const Formularioestilos = props => {
	function funcionestilos() {
		var lookchoice = document.forms[0];
		var i;
		for (i = 0; i < 6; i++) {
			if (lookchoice[i].checked) {
				Estilos = Estilos + lookchoice[i].value;
			}
		}
	}
	return (
		<form>
			<div className="row formulario-estilos-body">
				<div className="column">
					<img src="look1.jpg" />
					<label className="checkbox-label">
						<input type="checkbox" name="look1" />
						<i className="form-checkbox-button" />
						<span>Look 1</span>
					</label>

					<img src="look2.jpg" />
					<label className="checkbox-label">
						<input type="checkbox" name="look2" />
						<i className="form-checkbox-button" />
						<span>Look 2</span>
					</label>

					<img src="look3.jpg" />
					<label className="checkbox-label">
						<input type="checkbox" name="look3" />
						<i className="form-checkbox-button" />
						<span>Look 3</span>
					</label>

					<img src="look4.jpg" />
					<label className="checkbox-label">
						<input type="checkbox" name="look4" />
						<i className="form-checkbox-button" />
						<span>Look 4</span>
					</label>

					<img src="look5.jpg" />
					<label className="checkbox-label">
						<input type="checkbox" name="look5" />
						<i className="form-checkbox-button" />
						<span>Look 5</span>
					</label>

					<img src="look6.jpg" />
					<label className="checkbox-label">
						<input type="checkbox" name="look6" />
						<i className="form-checkbox-button" />
						<span>Look 6</span>
					</label>

					<img src="look7.jpg" />
					<label className="checkbox-label">
						<input type="checkbox" name="look7" />
						<i className="form-checkbox-button" />
						<span>Look 7</span>
					</label>

					<img src="look8.jpg" />
					<label className="checkbox-label">
						<input type="checkbox" name="look8" />
						<i className="form-checkbox-button" />
						<span>Look 8</span>
					</label>

					<img src="look9.jpg" />
					<label className="checkbox-label">
						<input type="checkbox" name="look9" />
						<i className="form-checkbox-button" />
						<span>Look 9</span>
					</label>

					<img src="look10.jpg" />
					<label className="checkbox-label">
						<input type="checkbox" name="look10" />
						<i className="form-checkbox-button" />
						<span>Look 10</span>
					</label>
				</div>

				<div className="column">
					<img src="look10.jpg" />
					<label className="checkbox-label">
						<input type="checkbox" name="look11" />
						<i className="form-checkbox-button" />
						<span>Look 11</span>
					</label>

					<img src="look11.jpg" />
					<label className="checkbox-label">
						<input type="checkbox" name="look12" />
						<i className="form-checkbox-button" />
						<span>Look 12</span>
					</label>

					<img src="look12.jpg" />
					<label className="checkbox-label">
						<input type="checkbox" name="look13" />
						<i className="form-checkbox-button" />
						<span>Look 13</span>
					</label>

					<img src="look13.jpg" />
					<label className="checkbox-label">
						<input type="checkbox" name="look14" />
						<i className="form-checkbox-button" />
						<span>Look 14</span>
					</label>

					<img src="look14.jpg" />
					<label className="checkbox-label">
						<input type="checkbox" name="look15" />
						<i className="form-checkbox-button" />
						<span>Look 15</span>
					</label>

					<img src="look15.jpg" />
					<label className="checkbox-label">
						<input type="checkbox" name="look16" />
						<i className="form-checkbox-button" />
						<span>Look 16</span>
					</label>

					<img src="look16.jpg" />
					<label className="checkbox-label">
						<input type="checkbox" name="look17" />
						<i className="form-checkbox-button" />
						<span>Look 17</span>
					</label>

					<img src="look17.jpg" />
					<label className="checkbox-label">
						<input type="checkbox" name="look18" />
						<i className="form-checkbox-button" />
						<span>Look 18</span>
					</label>

					<img src="look18.jpg" />
					<label className="checkbox-label">
						<input type="checkbox" name="look19" />
						<i className="form-checkbox-button" />
						<span>Look 19</span>
					</label>

					<img src="look19.jpg" />
					<label className="checkbox-label">
						<input type="checkbox" name="look20" />
						<i className="form-checkbox-button" />
						<span>Look 20</span>
					</label>
				</div>

				<div className="column">
					<img src="look21.jpg" />
					<label className="checkbox-label">
						<input type="checkbox" name="look21" />
						<i className="form-checkbox-button" />
						<span>Look 21</span>
					</label>

					<img src="look22.jpg" />
					<label className="checkbox-label">
						<input type="checkbox" name="look22" />
						<i className="form-checkbox-button" />
						<span>Look 22</span>
					</label>

					<img src="look23.jpg" />
					<label className="checkbox-label">
						<input type="checkbox" name="look23" />
						<i className="form-checkbox-button" />
						<span>Look 23</span>
					</label>

					<img src="look24.jpg" />
					<label className="checkbox-label">
						<input type="checkbox" name="look24" />
						<i className="form-checkbox-button" />
						<span>Look 24</span>
					</label>

					<img src="look25.jpg" />
					<label className="checkbox-label">
						<input type="checkbox" name="look25" />
						<i className="form-checkbox-button" />
						<span>Look 25</span>
					</label>

					<img src="look26.jpg" />
					<label className="checkbox-label">
						<input type="checkbox" name="look26" />
						<i className="form-checkbox-button" />
						<span>Look 26</span>
					</label>

					<img src="look27.jpg" />
					<label className="checkbox-label">
						<input type="checkbox" name="look27" />
						<i className="form-checkbox-button" />
						<span>Look 27</span>
					</label>

					<img src="look28.jpg" />
					<label className="checkbox-label">
						<input type="checkbox" name="look28" />
						<i className="form-checkbox-button" />
						<span>Look 28</span>
					</label>

					<img src="look29.jpg" />
					<label className="checkbox-label">
						<input type="checkbox" name="look29" />
						<i className="form-checkbox-button" />
						<span>Look 29</span>
					</label>

					<img src="look30.jpg" />
					<label className="checkbox-label">
						<input type="checkbox" name="look30" />
						<i className="form-checkbox-button" />
						<span>Look 30</span>
					</label>
				</div>
				<br />
				<input type="button" onClick="funcionestilos()" value="Estilos preferidos" />
				<br />
			</div>
		</form>
	);
};

export default Formularioestilos;
