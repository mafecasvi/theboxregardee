import React from "react";

function Formulario(props) {  
    return (
        <form>
            <div className="formulariogeneral-formato">
                <label className="label-title">Nombre de usuario</label><br></br>
                <input type="text" name="username" placeholder="elige un nombre de usuario" required="required"/>
                <label className="label-title">Correo electronico</label>
                <input type="email" name="email" placeholder="escribe tu correo electronico" required="required"/>
                <label className="label-title">Nombre</label>
                <input type="text" name="name" placeholder="escribe tu primer y segundo nombre" required="required"/>
                <label className="label-title" >Apellido</label>
                <input type="text" name="lastname" placeholder="escribe tu primer y segundo nombre" required="required"/>
                <label className="label-title">Fecha de Nacimiento</label>
                <input type="date" name="birthdate" placeholder="dd/mm/yyyy" required="required"/>
                <label className="label-title">Numero de celular</label>
                <input type="text" name="mobilenumber" placeholder="041XXXXXXXX" required="required"/>
                <label className="label-title">Direccion</label>
                <input type="text" name="address" placeholder="tu direccion lo mas concreta posible" required="required"/>
                <label className="label-title">Redes sociales referentes de estilo</label>
                <input type="text" name="socialmedia" placeholder="escribe marcas e influencers" required="required"/>
                <label className="label-title">Talla partes de arriba</label>
                <input type="text" name="sizetop" placeholder="tallas que usas en blusas, franelas, sweaters" required="required"/>
                <label className="label-title">Talla partes de abajo</label>
                <input type="text" name="sizebottom" placeholder="tallas que usas en pantalones y jeans" required="required"/>
                <label className="label-title">Talla de zapatos</label>
                <input type="text" name="sizeshoes" placeholder="5, 6, 7, 35, 36, 37, etc." required="required"/>
                <label className="label-title">Perfil de IG</label>
                <input type="text" name="igaccount" placeholder="@miperfil" required="required"/>
                <label className="label-title">Estatura</label>
                <input type="number" name="height" placeholder="en cm, por ej. 165" required="required"/>
                <label className="label-title">Cintura</label>
                <input type="number" name="waist" placeholder="en cm, por ej. 75" required="required"/>
                
                <label className="label-title">Brazos</label>
                <select name="armsuser" required="required"/>
                    <option value="1">1</option>
                </select>

                <label className="label-title">Espalda</label>
                <input type="text" name="shouldersuser" required="required"/>
                

                <label className="label-title">Torso</label>
                <input type="text" name="torsouser" required="required"/>
                

                <label className="label-title">Caderas</label>
                <input type="text" name="hipsuser" required="required"/>
                

                <label className="label-title">Piernas</label>
                <input type="text" name="legsuser" required="required"/>
                

                <input type="button" onclick="misdatospersonales()" value="Enviar datos personales">
            </div>
        </form>
    )
}

function Misdatospersonales() {
    console.log("Enviando datos personales"
    
    )
}


export default Formulario;
