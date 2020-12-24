import React from "react";
import "./css-component/chat.css";
import Listacontac from "./listacontatos.js";
import Comenzar from "./component-iniciobarrachat.js";
import Search from "./component-serach.js";
class buscaramigos extends React.Component{
    state = {
        colorbarra : "#8605ff",
        color2 :"#bbbfca",
        color3: "#e8e8e8",
        color4: "#db6400",
        buscarContactos:false
      }
    render(){
         if (this.props.statebuscaramigos == false) return null;
        return( 
           
            <React.Fragment >
          
                    <div className="input-group mb-3">
                    <form  onSubmit={this.props.preventDefault} className="form-inline width100">
                        <input onChange={this.props.searchamigos} value={this.props.statesearchamigos} type="text" className="form-control cajasText width90" placeholder="Busca a tus amigos" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                            <select id="tipodebusqueda" className="form-control width10 select">
                            <option className="dropdown-item" value='email' defaultValue>email</option>
                                <option className="dropdown-item" value='nombre' >nombre</option>
                            </select>
                        </form>
                       
                    </div>
                    <div className="list-group cajaContactos">
                    <Search
                     resultadodebusqueda={this.props.resultadodebusqueda}
                    searchamigosbarra={this.props.searchamigosbarra}
                    
                    />
                    {
                            this.props.data.map((item,i) =>
                            {
                                if (this.props.searchresultbarra == false) return null;
                                return( 
                          
                            <Listacontac
                            photoURL={item.photoURL}
                            displayName={item.displayName}
                            emailll={item.emailll}
                            emailcontac={this.props.emailcontac}
                            key={i}

                            />
                            )
                            })
                    }
                   </div>
                   {/* searchresultbarra={this.props.searchresultbarra} */}
            
            </React.Fragment>
        )
    }
}

export default buscaramigos;