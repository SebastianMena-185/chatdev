import React from "react";
import "./css-component/chat.css";
import ListaMaps from "./component-listachatmaps.js";
class listachat extends React.Component{
    state = {
        colorbarra : "#8605ff",
        color2 :"#bbbfca",
        color3: "#e8e8e8",
        color4: "#db6400",
        buscarContactos:false
      }
    
    render(){
         if (this.props.statelistadechat == false) return null;
        return( 
           
            <React.Fragment >
             <ul className="list-group">   {
                            this.props.datamischats.map((item,i) =>
                            {
                                return( 
                                  <ListaMaps
                                  foto={item.foto}
                                  name={item.name}
                                  email={item.email}
                                  click={this.props.click}
                                  key={i}/>
                         
                            )
                            })
                    }
          
            </ul>
            
         
            </React.Fragment>
        )
    }
}

export default listachat;