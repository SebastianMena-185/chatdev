import react from "react";
import "./css-component/chat.css";
import Logo from "./img/Logo.png";
class barrachat extends react.Component{
    
    state = {
        colorbarra : "#8605ff",
        color2 :"#bbbfca",
        color3: "#e8e8e8",
        color4: "#db6400",
        coloramarillo : "#fff3cd"
      }
    //
    //
      render(){
        return (
         <react.Fragment>
      <nav style={{ background:this.state.colorbarra}} className="navbar  navbar-light  cajamenu">
          <ul className="cajamenu">
            <li>
              <img src={Logo} width="65px"></img>
            </li>
          
          </ul>  
        <ul className="cajamenu  menu ">
          <li  className="marginlef">
                  <img  width="65px" src="https://i.pinimg.com/474x/48/40/b5/4840b5ce8cf64c19a5285191b38ca826.jpg" className="img  "></img>
              <ul   className="cajamenu list-group cajaSalir">
                 <a  style={{ background:this.state.coloramarillo}} className="list-group-item list-group-item-action" href="#">Perfil</a>
                <a  style={{ background:this.state.coloramarillo}} className="list-group-item list-group-item-action " href="#">Cerrar Sesion</a>
              </ul>
            </li>
            </ul> 
            
      
     
       
    
    </nav>

          <br></br>
          </react.Fragment>
        )
    }
}
export default barrachat;