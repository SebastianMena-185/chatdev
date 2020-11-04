import React from "react";
import "./componenetes/css-component/chat.css";
import Menu from "./componenetes/componente-barrachat.js";
import Barrachat from "./componenetes/componente-barracontactos.js";
import Cajachat from "./componenetes/component-cajachat.js";

class Chat extends React.Component{
  // clickdom = e =>{
  //    this.setState({
  //      click:true
  //    }) 
  //    console.log(this.state.click);
  // }
  // click0 = e =>{
    
  // }
  state = {
    colorbarra : "#8605ff",
    color2 :"#bbbfca",
    color3: "#e8e8e8",
    color4: "#db6400",
    click:false
  }
    render(){
        return (
            <React.Fragment >
            <Menu />
          <div    className="container-fluid ">
              <div className =" row">
                  <Barrachat />
                  <Cajachat />
       
    

              </div>
          </div>
          </React.Fragment>
        )
    }
}
export default Chat;