import react from "react";
import "./css-component/chat.css";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

class ulchat extends react.Component{
    state = {
        colorbarra : "#8605ff",
        color2 :"#bbbfca",
        color3: "#e8e8e8",
        color4: "#db6400",
        mensaje:"",
        url:'',

    }
    componentDidMount() {
        console.log('ya cargo')
        let lii = document.getElementsByClassName('lichat');
        let foco = lii[lii.length-1];
            foco.scrollIntoView(); 
           // ref={fieldRef}
           let referencia = this.props.chatFoto;
        //    console.log('la referencia es',referencia)
           switch(referencia) {
				
            case '' : 
            this.setState({
                url:''
            })  
            break    
      
            case undefined :
                console.log('entro por undefined')    
                this.setState({
                url:''
            })     
            break
        
            default:
                 var pathReferent = firebase.storage().ref(referencia).getDownloadURL().then(url=>{
              this.setState({ 
                 url
               })}).catch(error=>{console.log(error.message)})  
          }
        
             
      
        
                
          
       
    
        }
        // componentWillUnmount(){
        //     this.setState({
        //         url:''
        //     })
        // }
    render(){
     
        return(
          <react.Fragment>
                   
        <li  style={{ background: 	this.state.color3}} className="list-group-item  "><img className="imgcontactos" src={this.props.foto}></img><p className=" mensajes">{this.props.chat}</p>
        <img className='marginimgchar lichat' width='250px' src={this.state.url} ></img></li>
                  
            
           </react.Fragment>
            
        )
    }
}

export default ulchat;