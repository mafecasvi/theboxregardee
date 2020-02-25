import React from "react";

function Formularioestilos(props) {
    return (
        <form>
            <div className="formulario-estilos-body">
            
                <label className="checkbox-label">
                <input type="checkbox" name="look1" />
                <i class="form-checkbox-button"></i>
                <span>Look 1</span>
                </label>

                <label className="checkbox-label">
                <input type="checkbox" name="look2" />
                <i class="form-checkbox-button"></i>
                <span>Look 2</span>
                </label>

                <label className="checkbox-label">
                <input type="checkbox" name="look3" />
                <i class="form-checkbox-button"></i>
                <span>Look 3</span>
                </label>

                <label className="checkbox-label">
                <input type="checkbox" name="look4" />
                <i class="form-checkbox-button"></i>
                <span>Look 4</span>
                </label>

                <label className="checkbox-label">
                <input type="checkbox" name="look5" />
                <i class="form-checkbox-button"></i>
                <span>Look 5</span>
                </label>

                <label className="checkbox-label">
                <input type="checkbox" name="look6" />
                <i class="form-checkbox-button"></i>
                <span>Look 6</span>
                </label>

                <label className="checkbox-label">
                <input type="checkbox" name="look7" />
                <i class="form-checkbox-button"></i>
                <span>Look 7</span>
                </label>

                <label className="checkbox-label">
                <input type="checkbox" name="look8" />
                <i class="form-checkbox-button"></i>
                <span>Look 8</span>
                </label>

                <label className="checkbox-label">
                <input type="checkbox" name="look9" />
                <i class="form-checkbox-button"></i>
                <span>Look 9</span>
                </label>

                <label className="checkbox-label">
                <input type="checkbox" name="look10" />
                <i class="form-checkbox-button"></i>
                <span>Look 10</span>
                </label>

                <label className="checkbox-label">
                <input type="checkbox" name="look11" />
                <i class="form-checkbox-button"></i>
                <span>Look 11</span>
                </label>

                <label className="checkbox-label">
                <input type="checkbox" name="look12" />
                <i class="form-checkbox-button"></i>
                <span>Look 12</span>
                </label>

                <label className="checkbox-label">
                <input type="checkbox" name="look13" />
                <i class="form-checkbox-button"></i>
                <span>Look 13</span>
                </label>

                <label className="checkbox-label">
                <input type="checkbox" name="look14" />
                <i class="form-checkbox-button"></i>
                <span>Look 14</span>
                </label>

                <label className="checkbox-label">
                <input type="checkbox" name="look15" />
                <i class="form-checkbox-button"></i>
                <span>Look 15</span>
                </label>

                <label className="checkbox-label">
                <input type="checkbox" name="look16" />
                <i class="form-checkbox-button"></i>
                <span>Look 16</span>
                </label>

                <label className="checkbox-label">
                <input type="checkbox" name="look17" />
                <i class="form-checkbox-button"></i>
                <span>Look 17</span>
                </label>

                <label className="checkbox-label">
                <input type="checkbox" name="look18" />
                <i class="form-checkbox-button"></i>
                <span>Look 18</span>
                </label>

                <label className="checkbox-label">
                <input type="checkbox" name="look19" />
                <i class="form-checkbox-button"></i>
                <span>Look 19</span>
                </label>

                <label className="checkbox-label">
                <input type="checkbox" name="look20" />
                <i class="form-checkbox-button"></i>
                <span>Look 20</span>
                </label>

                <label className="checkbox-label">
                <input type="checkbox" name="look21" />
                <i class="form-checkbox-button"></i>
                <span>Look 21</span>
                </label>

                <label className="checkbox-label">
                <input type="checkbox" name="look22" />
                <i class="form-checkbox-button"></i>
                <span>Look 22</span>
                </label>

                <label className="checkbox-label">
                <input type="checkbox" name="look23" />
                <i class="form-checkbox-button"></i>
                <span>Look 23</span>
                </label>

                <label className="checkbox-label">
                <input type="checkbox" name="look24" />
                <i class="form-checkbox-button"></i>
                <span>Look 24</span>
                </label>

                <label className="checkbox-label">
                <input type="checkbox" name="look25" />
                <i class="form-checkbox-button"></i>
                <span>Look 25</span>
                </label>

                <label className="checkbox-label">
                <input type="checkbox" name="look26" />
                <i class="form-checkbox-button"></i>
                <span>Look 26</span>
                </label>

                <label className="checkbox-label">
                <input type="checkbox" name="look27" />
                <i class="form-checkbox-button"></i>
                <span>Look 27</span>
                </label>

                <label className="checkbox-label">
                <input type="checkbox" name="look28" />
                <i class="form-checkbox-button"></i>
                <span>Look 28</span>
                </label>

                <label className="checkbox-label">
                <input type="checkbox" name="look29" />
                <i class="form-checkbox-button"></i>
                <span>Look 29</span>
                </label>

                <label className="checkbox-label">
                <input type="checkbox" name="look30" />
                <i class="form-checkbox-button"></i>
                <span>Look 30</span>
                </label>

                <input type="button" onclick="funcionestilos()" value="Estilos preferidos">
            </div>
        </form>
        )
    }
            <script>
                function funcionestilos() {
                    var lookchoice = document.forms[0];
                    var i;
                    for (i = 0; i < 6; i++) {
                        if (lookchoice[i].checked) {
                                Estilos = Estilos + lookchoice[i].value;
                            }
                        }
                    }
            </script> 

export default Formularioestilos;