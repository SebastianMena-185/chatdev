import react from "react";
import "./css-component/chat.css";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firebase-firestore";
import Ulchat from "./component-ulchat.js";


class subirimg extends react.Component{
render(){
    if (this.props.enviarimg !== true) return null;
    return(
        <react.Fragment>
            <ul className={`nav flex-column ulsubirfotochat ${this.props.difuminar}`}>
                        <li className="nav-item">
                        <a className="nav-link active" href="#">
                            <img className='camarasubirfoto' onClick={this.props.activarmodal} width='30px'src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDcxLjA0IDQ3MS4wNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDcxLjA0IDQ3MS4wNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00MTQuNzIsMTEyLjY0aC00OS4xNTJsLTI3LjEzNi00MC45NmMtMTAuMjQtMTUuMzYtMjguMTYtMjQuNTc2LTQ2LjU5Mi0yNC41NzZIMTc5LjINCgkJCWMtMTguNDMyLDAtMzYuMzUyLDkuMjE2LTQ2LjU5MiwyNC41NzZsLTI3LjEzNiw0MC45Nkg1Ni4zMkMyNS4wODgsMTEyLjY0LDAsMTM3LjcyOCwwLDE2OC45NnYxOTguNjU2DQoJCQljMCwzMS4yMzIsMjUuMDg4LDU2LjMyLDU2LjMyLDU2LjMyaDM1OC40YzMxLjIzMiwwLDU2LjMyLTI1LjA4OCw1Ni4zMi01Ni4zMlYxNjguOTZDNDcxLjA0LDEzNy43MjgsNDQ1Ljk1MiwxMTIuNjQsNDE0LjcyLDExMi42NA0KCQkJeiBNMjM1LjUyLDM3Ny44NTZjLTcwLjE0NCwwLTEyNi45NzYtNTYuODMyLTEyNi45NzYtMTI2Ljk3NmMwLTcwLjE0NCw1Ni44MzItMTI2LjQ2NCwxMjYuOTc2LTEyNi40NjQNCgkJCXMxMjYuOTc2LDU2LjgzMiwxMjYuOTc2LDEyNi45NzZDMzYyLjQ5NiwzMjEuMDI0LDMwNS42NjQsMzc3Ljg1NiwyMzUuNTIsMzc3Ljg1NnogTTQwNy41NTIsMTkyYy0wLjUxMiwwLTEuMDI0LDAtMi4wNDgsMGgtMjAuNDgNCgkJCWMtOS4yMTYtMC41MTItMTYuMzg0LTguMTkyLTE1Ljg3Mi0xNy40MDhjMC41MTItOC43MDQsNy4xNjgtMTUuMzYsMTUuODcyLTE1Ljg3MmgyMC40OGM5LjIxNi0wLjUxMiwxNi44OTYsNi42NTYsMTcuNDA4LDE1Ljg3Mg0KCQkJQzQyMy40MjQsMTgzLjgwOCw0MTYuNzY4LDE5MS40ODgsNDA3LjU1MiwxOTJ6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0yMzUuNTIsMTgwLjczNmMtMzguOTEyLDAtNzAuNjU2LDMxLjc0NC03MC42NTYsNzAuNjU2czMxLjc0NCw3MC4xNDQsNzAuNjU2LDcwLjE0NHM3MC42NTYtMzEuNzQ0LDcwLjY1Ni03MC42NTYNCgkJCUMzMDYuMTc2LDIxMS45NjgsMjc0LjQzMiwxODAuNzM2LDIzNS41MiwxODAuNzM2eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" />
                            </a>
                        </li>
            </ul>
        </react.Fragment>)
    
}
}
export default subirimg;





