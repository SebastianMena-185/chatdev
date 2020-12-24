import react from "react";
import "./css-component/chat.css";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firebase-firestore";
import Ulchat from "./component-ulchat.js";


class modalimg extends react.Component{
state = {
    coloramarillo: '',
    magin:'-346px 0px 0px 0px',
    alto:'119px'
}
render(){
     if (this.props.modal !== true) return null;
    return(
        <react.Fragment>
        <div className="" >
  <div    className="modal-dialog">
    <div className="modal-content coloramarillo" style={{ margin: this.state.magin}}>
     
      <div className="modal-body center">
      <button onClick={this.props.cerrarmodal} type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <img  style={{ height: this.state.alto}}   width='127px'  src={this.props.avatarcambiarperfil}></img>
        <br/> <br/> 
        <div className="progress">
  <div className="progress-bar" role="progressbar" style={{width: `${this.props.porcentaje+'%'}`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div> <br/> 
        <div className="custom-input-file btn">Subir foto...<img  style={{margin: this.state.margin}}  width='20px'    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0zODAuMDMyLDEzMy40NzJsLTExMi0xMjhDMjY0Ljk5MiwyLjAxNiwyNjAuNjA4LDAsMjU2LDBjLTQuNjA4LDAtOC45OTIsMi4wMTYtMTIuMDMyLDUuNDcybC0xMTIsMTI4DQoJCQljLTQuMTI4LDQuNzM2LTUuMTUyLDExLjQyNC0yLjUyOCwxNy4xNTJDMTMyLjAzMiwxNTYuMzIsMTM3LjcyOCwxNjAsMTQ0LDE2MGg2NHYyMDhjMCw4LjgzMiw3LjE2OCwxNiwxNiwxNmg2NA0KCQkJYzguODMyLDAsMTYtNy4xNjgsMTYtMTZWMTYwaDY0YzYuMjcyLDAsMTEuOTY4LTMuNjQ4LDE0LjU2LTkuMzc2QzM4NS4xNTIsMTQ0Ljg5NiwzODQuMTkyLDEzOC4xNzYsMzgwLjAzMiwxMzMuNDcyeiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNDMyLDM1MnY5Nkg4MHYtOTZIMTZ2MTI4YzAsMTcuNjk2LDE0LjMzNiwzMiwzMiwzMmg0MTZjMTcuNjk2LDAsMzItMTQuMzA0LDMyLTMyVjM1Mkg0MzJ6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" />
<input id='cambiarfotodeperfil' onChange={this.props.cambiarfotodeperfil} type="file" id="fichero-tarifas" className="input-file" accept="image/png, image/jpeg"/>

</div>
      </div>
      <div className="modal-footer">
        <button onClick={this.props.cerrarmodal} type="button" className="btn " data-dismiss="modal">Cerrar</button>
        <button onClick={this.props.enviarimggg} type="button" className="btn ">Enviar</button>
      </div>
    </div>
  </div>
</div>
        </react.Fragment>)
    
}
}
export default modalimg;