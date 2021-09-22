import React from "react";
import "../styles/NotFound/NotFound.css";

const NotFound = props =>{

return(
<>

  <h1 className="mt">  Error 404</h1>
<p className="zoom-area"><b>Lo sentimos</b> No pudimos encontrar la pagina que digito </p>
<section className="error-container">
  <span><span>4</span></span>
  <span>0</span>
  <span><span>4</span></span>
</section>
<div className="link-container">
  <a  href="/" className="more-link">Volver a la pagina de Inicio</a>
</div>
</>
)

}
export default NotFound;