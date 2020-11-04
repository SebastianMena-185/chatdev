import React from "react";
import "./css-component/chat.css";

class barracont extends React.Component{
    state = {
        colorbarra : "#8605ff",
        color2 :"#bbbfca",
        color3: "#e8e8e8",
        color4: "#db6400"
      }
    render(){
        return(
            <div  className="col-3 ">
                    <div className="alert alert-warning" role="alert">
                        bienvenidxs! ...
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control cajasText" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        <div className="input-group-append">
                        </div>
                    </div>
                    <div  className="list-group cajaContactos">
                    
                            <a href="#" className="list-group-item list-group-item-action active">
                            Cras justo odio
                            </a>
                            <a href="#" className="list-group-item list-group-item-action">Morbi leo risus</a>
                            <a href="#" className="list-group-item list-group-item-action">Porta ac consectetur ac</a>
                            <a href="#" className="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
                            <a href="#" className="list-group-item list-group-item-action disabled" aria-disabled="true">Vestibulum at eros</a>
                            <a href="#" className="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
                            <a href="#" className="list-group-item list-group-item-action">Morbi leo risus</a>
                            <a href="#" className="list-group-item list-group-item-action">Porta ac consectetur ac</a>
                            <a href="#" className="list-group-item list-group-item-action disabled" aria-disabled="true">Vestibulum at eros</a>
                            <a href="#" className="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
                            <a href="#" className="list-group-item list-group-item-action">Morbi leo risus</a>
                            <a href="#" className="list-group-item list-group-item-action">Porta ac consectetur ac</a>
                            <a href="#" className="list-group-item list-group-item-action disabled"  aria-disabled="true">Vestibulum at eros</a>
                    </div>
            </div>
        )
    }
}

export default barracont;