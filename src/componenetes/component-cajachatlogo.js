import react from "react";
import "./css-component/chat.css";
import Logocaja from "./img/cajachat.png";

class logo extends react.Component{
   

    render(){
        if (this.props.activarchat == true) return null;
        return(
          <react.Fragment>
              
             <img className="logocajachat" width="400px" src={Logocaja}></img>
           
           </react.Fragment>
            
        )
    }
}

export default logo;