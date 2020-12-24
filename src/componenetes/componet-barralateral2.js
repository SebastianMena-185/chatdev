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

class barralateral2 extends React.Component{
    state = {
        colorbarra : "#8605ff",
        color2 :"#bbbfca",
        color3: "#e8e8e8",
        color4: "#db6400",
        buscarContactos:false,
        colorgris :'#e8e8e8'
      }
    render(){ 
        if (this.props.activarbarra2 == false) return null;
        return( 
           
            <React.Fragment >
              
       {/* . .col-lg-3 */}
             <div id='CAJA'  className="responsivechat col-12 col-sm-12  col-md-3">
                 <div className="alert alert-warning center" role="alert">  
                    <img onClick={this.props.buscaramigos}    data-toggle="tooltip" data-placement="bottom" title="Busca a tus amigos"        className="float-left" width="40px" src={Lupa} />
                    <img onClick={this.props.listachat}   data-toggle="tooltip" data-placement="bottom" title="Tus devchats"   width="40px" src={Listachat} />
                    <img onClick={this.props.perfil} data-toggle="tooltip" data-placement="bottom" title="Perfil"  className="border-radius float-right" width="40px" src={this.props.infuser.photoURL} />
                 </div>
                 <Comenzar
                  stateiniciochat={this.props.stateiniciochat }
                 />

                  <Perfil 
                 stateperfil={this.props.stateperfil}
                 editarabrir= {this.props.editarabrir}
                 perfilll={this.props.perfilll}     
                infuser={this.props.infuser}  
                sali={this.props.sali}    
                 /> 
                
                <Editar
                cambiarfotodeperfil={this.props.cambiarfotodeperfil}
               avatarcambiarperfil={this.props.avatarcambiarperfil}
                stateperfil={this.props.stateperfil} 
                 guardarloscambios={this.props.guardarloscambios}
                 stateeditarnombre={this.props.stateeditarnombre}
                 editarcerrar={this.props.editarcerrar}
                 editarnombre={this.props.editarnombre}
                 editar={this.props.editar}

                 />

                      <Listadechats
                       click={this.props.click}
                      statelistadechat={this.props.statelistadechat}
                      datamischats={this.props.datamischats}
                      />      
                            <Buscaramigos 
                            
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
               
                   
            </div>
         
           </React.Fragment>
        )
    }
}

export default barralateral2;