import React from "react";

function Budget(props) {
	return (
		<form>
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
		</form>
	);
}

function Budgetsubmission() {
	console.log("Enviando presupuesto");
}

export default Budget;
