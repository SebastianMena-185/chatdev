import React from "react";
import "./css-component/chat.css";
import Listacontac from "./listacontatos.js";
import Comenzar from "./component-iniciobarrachat.js";
import Buscaramigos from "./component-buscaramigos.js";
import Lupa from "./img/lupa.png";
import Avatar from "./img/avatar.png";
import Listachat from "./img/listachat.png";
import Listadechats from "./component-listachat.js";
import Perfil from './componente-perfil.js';
import Editar from './component-editarperfil.js';

class barralateral1 extends React.Component{
    state = {
        colorbarra : "#8605ff",
        color2 :"#bbbfca",
        color3: "#e8e8e8",
        color4: "#db6400",
        buscarContactos:false,
        colorgris :'#e8e8e8'
      }
    render(){
        if (this.props.activarbarra1 == false) return null;
        return( 

            <React.Fragment >
              <div className="col-1 ">
                 <div  style={{ background:this.state.colorbarra}} className="alert cajaLateral alert-warning" role="alert">
                   <img onClick={this.props.funactivarbarra2} width='40px' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ5MC42NjcgNDkwLjY2NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9IiIgZD0iTTI0NS4zMzMsMEMxMDkuODM5LDAsMCwxMDkuODM5LDAsMjQ1LjMzM3MxMDkuODM5LDI0NS4zMzMsMjQ1LjMzMywyNDUuMzMzICBzMjQ1LjMzMy0xMDkuODM5LDI0NS4zMzMtMjQ1LjMzM0M0OTAuNTE0LDEwOS45MDMsMzgwLjc2NCwwLjE1MywyNDUuMzMzLDB6IiBmaWxsPSIjZmZmM2NkIiBkYXRhLW9yaWdpbmFsPSIjMDA5Njg4IiBjbGFzcz0iIj48L3BhdGg+CjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9IiIgZD0iTTI5MC4xMzMsMTA0LjUzM2MtMTkuMTM5LTE4LjI4OS00OS4yNzctMTguMjg5LTY4LjQxNiwwYy0xOC44OTMsMTguODgxLTE4LjkwMiw0OS41MDMtMC4wMjEsNjguMzk1ICBjMC4wMDcsMC4wMDcsMC4wMTQsMC4wMTQsMC4wMjEsMC4wMjFsMTkuMiwxOS4ySDExNy4zMzNDODcuODc4LDE5Mi4xNDksNjQsMjE2LjAyNyw2NCwyNDUuNDgzICBjMCwyOS40NTUsMjMuODc4LDUzLjMzMyw1My4zMzMsNTMuMzMzaDEyMy41ODRsLTE5LjIsMTkuMmMtMTcuNTIyLDIwLjE3NS0xNS4zNzEsNTAuNzM0LDQuODA0LDY4LjI1NyAgYzE4LjI1OSwxNS44NTgsNDUuNDIzLDE1Ljc5OSw2My42MTItMC4xMzlsMTE4LjI1MS0xMTguMjUxYzEyLjQ5Mi0xMi40OTYsMTIuNDkyLTMyLjc1MiwwLTQ1LjI0OEwyOTAuMTMzLDEwNC41MzN6IiBmaWxsPSIjMDAwMDAwIiBkYXRhLW9yaWdpbmFsPSIjZmFmYWZhIiBjbGFzcz0iIj48L3BhdGg+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4=" />
                </div>    
              </div>
       
      
           </React.Fragment>
        )
    }
}

export default barralateral1;