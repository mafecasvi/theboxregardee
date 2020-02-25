import React from "react";

function Formulario(props) {  
    return (
        <form>
            <div className="formulariogeneral-formato">
                
                <div className="form-short-text">
                    <label className="label-title">Nombre de usuario</label>
                    <input type="text" name="username" placeholder="elige un nombre de usuario" required="required" />
                </div>

                <div className="form-short-text">
                    <label className="label-title">Correo electronico</label>
                    <input type="email" name="email" placeholder="escribe tu correo electronico" required="required" />
                </div>

                <div className="form-short-text">
                    <label className="label-title">Nombre</label>
                    <input type="text" name="name" placeholder="escribe tu primer y segundo nombre" required="required" />
                </div>

                <div className="form-short-text">
                    <label className="label-title" >Apellido</label>
                    <input type="text" name="lastname" placeholder="escribe tu primer y segundo nombre" required="required" />
                </div>

                <div className="form-calendar">
                    <label className="label-title">Fecha de Nacimiento</label>
                    <input type="date" name="birthdate" placeholder="dd/mm/yyyy" required="required" />
                </div>

                <div className="form-short-text">
                    <label className="label-title">Numero de celular</label>
                    <input type="text" name="mobilenumber" placeholder="041XXXXXXXX" required="required" />
                </div>

                <div className="form-long-text">
                    <label className="label-title">Direccion</label>
                    <input type="text" name="address" placeholder="tu direccion lo mas concreta posible" required="required" />
                </div>

                <div className="form-long-text">
                    <label className="label-title">Redes sociales referentes de estilo</label>
                    <input type="text" name="socialmedia" placeholder="escribe marcas e influencers" required="required" />
                </div>

                <div className="form-medium-text">
                    <label className="label-title">Talla partes de arriba</label>
                    <input type="text" name="sizetop" placeholder="tallas que usas en blusas, franelas, sweaters" required="required" />
                </div>

                <div className="form-medium-text">
                    <label className="label-title">Talla partes de abajo</label>
                    <input type="text" name="sizebottom" placeholder="tallas que usas en pantalones y jeans" required="required" />
                </div>

                <div className="form-medium-text">
                    <label className="label-title">Talla de zapatos</label>
                    <input type="text" name="sizeshoes" placeholder="5, 6, 7, 35, 36, 37, etc." required="required" />
                </div>

                <div className="form-short-text">
                    <label className="label-title">Perfil de IG</label>
                    <input type="text" name="igaccount" placeholder="@miperfil" required="required" />
                </div>

                <div className="form-number">
                    <label className="label-title">Estatura</label>
                    <input type="number" name="height" placeholder="en cm, por ej. 165" required="required" />
                </div>

                <div className="form-number">
                    <label className="label-title">Cintura</label>
                    <input type="number" name="waist" placeholder="en cm, por ej. 75" required="required" />
                </div>

                <div className="form-dropdown">
                    <label for="arms" className="label-title">Brazos</label>
                        <select id="arms" name="armsuser" required="required">
                            <option value="short">Cortos, a veces las mangas me quedan largas</option>
                            <option value="average">Average</option>
                            <option value="long">Elegantemente largos</option>
                        </select>
                </div>

                <div className="form-dropdown">
                    <label for="shoulders" className="label-title">Espalda</label>
                        <select id="shoulders" type="text" name="shouldersuser" required="required">
                            <option value="narrow">Estrecha</option>
                            <option value="average">Promedio</option>
                            <option value="wide">Ancha, de nadador pro</option>
                        </select>
                </div>

                <div className="form-dropdown">
                    <label for="torso" className="label-title">Torso</label>
                        <select id="torso" type="text" name="torsouser" required="required">
                            <option value="short">Un poco corto</option>
                            <option value="average">Average</option>
                            <option value="long">Un poco largo</option>
                        </select>
                </div>

                <div className="form-dropdown">
                    <label for="hips" className="label-title">Caderas</label>
                        <select id="hips" type="text" name="hipsuser" required="required">
                            <option value="narrow">Estrechas</option>
                            <option value="average">Average</option>
                            <option value="wide">Un poco anchas</option>
                        </select>
                </div>

                <div className="form-dropdown">
                    <label for="legs" className="label-title">Piernas</label>
                        <select id="legs" type="text" name="legsuser" required="required">
                            <option value="short">Los pantalones siempre me quedan largos</option>
                            <option value="average">Los pantalones me quedan OK</option>
                            <option value="long">Los pantalones siempre me quedan cortos</option>
                        </select>
                </div>

                <div className="button-submit">
                    <input type="button" onclick="profileinformation()" value="Enviar datos personales" />
                </div>
                
            </div>
        </form>
    )
}

function Profileinformation() {
    console.log("Enviando datos personales"
    
    )
}


export default Formulario;
