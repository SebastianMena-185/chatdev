import react from "react";
import "./css-component/chat.css";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firebase-firestore";
import CajaFinal from "./component-chatscajafinal.js";
import Logocaja from "./component-cajachatlogo.js";
class cajachat extends react.Component{
    state = {
        colorbarra : "#8605ff",
        color2 :"#bbbfca",
        color3: "#e8e8e8 !important",
        color4: "#db6400",
        mensaje:""

    }

    render(){
        return( 
       

            <div style={{ background: 	this.state.color3}} 	 className={` responsivecaja overflow-auto col-12 col-sm-12  col-md-${this.props.clasname} ${this.props.responsi} padding0 cajaText `}>
             
            
             
                <CajaFinal
                porcentaje={this.props.porcentaje}
                 enviarimggg={this.props.enviarimggg}
                cerrarmodal={this.props.cerrarmodal} 
                difuminar={this.props.difuminar}
                activarmodal={this.props.activarmodal}
                modal={this.props.modal}
                avatarcambiarperfil={this.props.avatarcambiarperfil}
               cambiarfotodeperfil ={this.props.cambiarfotodeperfil}
                 cerraradjuntar={this.props.cerraradjuntar}
                 adjucar={this.props.adjucar}
                cerrarenviarimg={this.props.cerrarenviarimg}
                desenfocar={this.props.desenfocar}
                 abrirenviarimg={this.props.abrirenviarimg}
                 enviarimg={ this.props.enviarimg}
                enviarForms={this.props.enviarForms}
                activarbarralateral={this.props.activarbarralateral}
                 destinatario={this.props.destinatario}
                chats = {this.props.chats}
                enviarText={this.props.enviarText}
                mensajestate={this.props.mensajestate}
                mensaje={this.props.mensaje}
                activarchat={this.props.activarchat}
                />
                <Logocaja
                activarchat={this.props.activarchat}
                />
                
            </div>
            
        )
    }
}

export default cajachat;