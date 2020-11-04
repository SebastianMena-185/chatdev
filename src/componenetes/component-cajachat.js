import react from "react";
import "./css-component/chat.css";

class cajachat extends react.Component{
    state = {
        colorbarra : "#8605ff",
        color2 :"#bbbfca",
        color3: "#e8e8e8",
        color4: "#db6400"
      }
    render(){
        return(
            <div style={{ background: 	this.state.color3}}  className="col-9 cajaText">
   

                <div id="inferior"  className="input-group mb-3 alert alert-warning">
                    <input type="text" className="form-control cajasText" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary cajasText" type="button" id="button-addon2">Button</button>
                    </div>

                </div>
            </div>
        )
    }
}

export default cajachat;