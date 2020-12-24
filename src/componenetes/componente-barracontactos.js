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
import Barra1 from './componet-barralateral1.js';
import Barra2 from './componet-barralateral2.js';
class barracont extends React.Component{
    state = {
        colorbarra : "#8605ff",
        color2 :"#bbbfca",
        color3: "#e8e8e8",
        color4: "#db6400",
        buscarContactos:false,
        colorgris :'#e8e8e8'
      }
    render(){
        return( 

            <React.Fragment >
       
    
       <Barra2 
       cambiarfotodeperfil={this.props.cambiarfotodeperfil}
       avatarcambiarperfil={this.props.avatarcambiarperfil}
      buscaramigos ={this.props.buscaramigos} 
      listachat ={this.props.listachat}
      perfil={this.props.perfil}
       activarbarra2={this.props.activarbarra2}
        stateiniciochat={this.props.stateiniciochat }  
        stateperfil={this.props.stateperfil}
        editarabrir= {this.props.editarabrir}
        perfilll={this.props.perfilll}     
        infuser={this.props.infuser}  
        sali={this.props.sali}  
        stateperfil={this.props.stateperfil} 
         guardarloscambios={this.props.guardarloscambios}
         stateeditarnombre={this.props.stateeditarnombre}
         editarcerrar={this.props.editarcerrar}
         editarnombre={this.props.editarnombre}
         editar={this.props.editar}
          click={this.props.click}
         statelistadechat={this.props.statelistadechat}
         datamischats={this.props.datamischats}
         resultadodebusqueda={this.props.resultadodebusqueda}
         searchamigosbarra={this.props.searchamigosbarra}
         searchresultbarra={this.props.searchresultbarra}
         statesearchamigos={this.props.statesearchamigos}
         preventDefault={this.props.preventDefault}
         searchamigos={this.props.searchamigos}
         statebuscaramigos={this.props.statebuscaramigos}
         data={ this.props.data}
        user={this.props.user }
        emailcontac={this.props.emailcontac}
       />
    
         
           </React.Fragment>
        )
    }
}

export default barracont;