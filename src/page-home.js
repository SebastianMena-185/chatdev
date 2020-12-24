import React from "react";
import "./componenetes/css-component/home.css";
import Logo from './componenetes/img/logohome.png';
import Yo from "./componenetes/img/perfilSebastián.jpg";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
var usuarionuevo = null;
class Home extends React.Component{
  
  state = {
      user :{
        photoURL:'',
      displayName:'',
      email:''
    },
    color : "#1f6f8b",
    color2 :"#e6d5b8",
    color3: "#e8e8e8",
    color4: "#db6400",
    usuarionuevo: null,
    result:{}
  }

    componentWillMount(){
      let bandera = false;
      firebase.auth().onAuthStateChanged(user =>{
        this.setState({user});
        
        if (this.state.user) {
          console.log(user)
              if(this.state.usuarionuevo != null){ 
                if(this.state.usuarionuevo == true){
                 let email= this.state.user.email;
         email= email.replace("@","");
         email=  email.replace(".","");
         email= email.replace("$","");
         email= email.toString();
            const usuario = {
                emailll:this.state.user.email,
            displayName:this.state.user.displayName,
            photoURL:this.state.user.photoURL,
            
            }
        console.log(email);
        if(email != ""){
          const db = firebase.database();
          const dbRef = db.ref('usuarios/' );
          const newusuario = dbRef.child(email);
          newusuario.set(usuario); 
            this.props.history.push("/chat?"+this.state.user.email);
        }else{console.log('llega vacio')} 
                }else{
                  this.props.history.push("/chat?"+this.state.user.email);
                } 
                  
          
    
          
           
         
        }}
      
      })
    }
  
  handleGoogle = e =>{
    e.preventDefault();



    let bandera =false;
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(result => {
      console.log(result.additionalUserInfo.isNewUser);
      this.setState({usuarionuevo : result.additionalUserInfo.isNewUser});
     


       

      // This gives you a Google Access Token. You can use it to access the Google API..child(userId)
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log('el error es:'+errorMessage)
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }
  
    render(){
        return (
            <React.Fragment >
                 <div className="container">
                    <div className="row ">
                    <div className="col-6">
                      <img  src={Logo}></img>
                    </div>
                    <div className="col-4 margenes-top50">

                      <div className="alert alert-warning " role="alert">
                      <div className="center">
                        <img width="150px" src={Yo} className="yo"></img>
                      </div>
                      <br/>
  <h4 className="alert-heading">Bienvenidxs!</h4>
  <p>Mi nombre es Sebastián Mena. Soy un desarrollador junior sin experciencia en el mundo de la tecnologia, hice este chat para que puedan ver de lo que soy capaz, espero les guste.</p>
  <hr/>
  <p className="mb-0">Formas de Loguearse.</p>
  <br/>
<form className="">

                        <button type="submit" onClick={this.handleGoogle} className="btn btn-primary yo">Google</button>
                      </form></div>
                    </div>

</div></div>


                <div className="container margenes-top300 margenes-bottom100">
                    <div className="row ">
              <h3>Bienvenidxs! a nombre</h3>
              <hr
        style={{
            color: this.state.color,
            backgroundColor: this.state.color,
            height: 5
        }}
    />
                    <div className="card-deck">
  <div  style={{ background: 	this.state.color}} className="card">
    <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div  style={{ background: 	this.state.color2}} className="card">
    <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div  style={{ background: 	this.state.color4}} className="card">
    <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>




                    </div>
                </div>
                <div className="center futer">
                  <br></br><br></br><br></br>
                   <h4>todo los derechos reservados @SebastianMena</h4>
                </div>
            </React.Fragment>
        )
    }
}

export default Home;