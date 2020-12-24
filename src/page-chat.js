import React from "react";
import "./componenetes/css-component/chat.css";
import Barrachat from "./componenetes/componente-barracontactos.js";
import Cajachat from "./componenetes/component-cajachat.js";
import firebase from "firebase/app";
import  "firebase/database";
import "firebase/auth";
import "firebase/storage";
import Logo from "./componenetes/img/Logo.png";
import Avatar from "./componenetes/img/avatar.jpg";
import Loading from "./componenetes/componente-loading.js";

class Chat extends React.Component{
  state = {
    porcentaje:'',
    difuminar:'',
    modal:false,
    cerraradjuntar:'none',
    adjucar:'flex',
    desenfocar:'',
    enviarimg:false,
    imgcambiarperfil:[],
      imgcambiarperfilF:[],
    responsi:'',
    clasname:'9',
    colorbarra : "#8605ff",
    coloramarillo : "#fff3cd",
    color2 :"#bbbfca",
    color3: "#e8e8e8",
    color4: "#db6400",
    data:[],
    datamischats:[], 
    datachat:[],
    user :{
      photoURL:'',
      displayName:'',
      email:''
  },
  infuser:{
    photoURL:'',
    displayName:'',
    email:''
  },
  destinatario :{
    photoURL:'',
    displayName:'',
    email:''
},
  avatar : Avatar,
  mensaje:"",
  emailchat:"",
activarchat:false,
loading:false,
buscaramigos:false,
listadechat:false,
perfil:false,
iniciochat:true,
searchamigos:"",
searchamigosbarra:true,
searchresultbarra:false,
resultadodebusqueda:"",
editarnombre:"",
perfilll:true,
editar:false,
editarnombre:'',
activarbarra1:false,
activarbarra2:true,
snapshot:{}
  } 
  salir = e =>{

      firebase.auth().signOut().then(function() {
        
        
    
      }).catch(function(error) {
        console.log(error)
      });
    
  } 
  componentDidMount() {
    console.log('funca el chats?:',this.state.snapshot )
  }
  componentWillMount(){
    // let num = window.screen.width;
    // if(num > 768){
    //   this.setState({
    //     responsi:'visibleimportant'
    //   })
    // }
    firebase.auth().onAuthStateChanged(user =>{
      this.setState({user});
      if (this.state.user) {  
        // console.log(this.state.user)
       this.setState({
     
         avatar : this.state.user.photoURL
        })
      }else{  

     this.setState({
       user:{
         email:''
       }
     })
  this.props.history.push("/");
        
       
       
      }
    });


  


  let miemail  = this.props.history.location.search.substr(1);
  miemail= miemail.replace("@","");
  miemail=  miemail.replace(".","");
  miemail= miemail.replace("$","");
  let cont = 0;
  let array=[]; 

 const db = firebase.database();
  const dbReff = db.ref('usuarios/'+miemail+'/chat/listadechats');
  dbReff.on("child_added", snapshot =>{
    array[cont]=snapshot.val();
    cont++;
  })
  const dbReffff = db.ref('usuarios/'+miemail);
  dbReffff.on("child_added", snapshot =>{
    this.setState({snapshot:snapshot.val()})
  })
const dbfree = db.ref('usuarios/'+miemail);
var referenciaaa='';
dbfree.once('value').then((snapshot) => {
  referenciaaa=snapshot.val().photoURL;
  this.setState({
  infuser:{
    photoURL: snapshot.val().photoURL,
      displayName: snapshot.val().displayName,
      email: snapshot.val().emailll
    }
  })


});
// let referencia = referenciaaa;
// let pathReferent = firebase.storage().ref(referencia)
// .getDownloadUrl().then(url =>{
//     this.setState({
//       infuser:{
//         photoURL:url,
//       }
//     })
// })
// .catch(error=>{console.error(error)})


  this.setState({datamischats:array});              
 
  }
  emailcontac = e =>{
   
   this.setState({
     activarchat:true,
     loading:true
   })
    let email=e.target.name;
    email= email.replace("@","");
    email=  email.replace(".","");
    email= email.replace("$","");
     let array = [];
     let cont = 0;
    this.setState({
      emailchat: email
    }); 

    const db = firebase.database();
    const dbreff = db.ref('usuarios/'+email);
    dbreff.on('value', (snapshot) =>{
      this.setState({
          destinatario :{
            photoURL:snapshot.val().photoURL,
            displayName:snapshot.val().displayName,
            email:snapshot.val().emailll
        }      
        })
});
    let miemail = this.state.user.email;
    miemail= miemail.replace("@","");
    miemail=  miemail.replace(".","");
    miemail= miemail.replace("$","");
    console.log(miemail);

   //cont = 0
   
    const dbRef = db.ref('usuarios/'+miemail+'/'+'chat/'+email);
    //const usus = dbRef.child(email);
    
    dbRef.on("child_added", snapshot =>{  
      
        array[cont]=snapshot.val();
        cont++;
    });
        this.setState({
        datachat:array,
        loading:false,
        activarbarra1:true,
        activarbarra2:false
      }); 
      
      


  }
  mensajestate = e =>{
    e.preventDefault();
    this.setState({
      mensaje :  e.target.value
    });
  
}
enviarText= e =>{

let prueba = this.state.mensaje 
let uiddestinatario = this.state.emailchat;
let nombredistinatario=this.state.destinatario.displayName;
  // A post entry.foto: this.state.photoURL,
  var postData ={
    
    Chat:prueba,
    chatFoto:'',
    foto: this.state.user.photoURL
    }
  let miemail = this.state.user.email;
  let minombre =  this.state.user.displayName;
  miemail= miemail.replace("@","");
  miemail=  miemail.replace(".","");
  miemail= miemail.replace("$","");
  // Get a key for a new Post..child(uid)
  var newPostKey = firebase.database().ref().push().key;
    let miuser ={
      foto:this.state.user.photoURL,
     email: this.state.user.email,
      name:this.state.user.displayName
    }
    let destinatariouser ={
      foto:this.state.destinatario.photoURL,
     email: this.state.destinatario.email,
      name:this.state.destinatario.displayName
    }
  if(prueba !== ''){
      var updates = {};
  updates['/usuarios/' + uiddestinatario + '/chat/'+'/listadechats/'+minombre] = miuser;
  updates['/usuarios/' +  miemail + '/chat/'+'/listadechats/'+nombredistinatario] = destinatariouser;
  updates['/usuarios/' + uiddestinatario + '/chat/'+'/'+miemail+'/'+ newPostKey] = postData;
  updates['/usuarios/' +  miemail + '/chat/'+'/'+uiddestinatario+'/'+ newPostKey] = postData;
  
  this.setState({
  mensaje:'' 
});


return firebase.database().ref().update(updates);

  }else{
    console.log('mensaje vacio')
  }



}
click = e =>{
 let avtivarr = document.getElementById('CAJA');
  this.setState({
    loading:true
  })
   let email=e.target.id;
   email= email.replace("@","");
   email=  email.replace(".","");
   email= email.replace("$","");
    let array = [];
    let cont = 0;
   this.setState({
     emailchat: email
   }); 
   const db = firebase.database();
   const dbreff = db.ref('usuarios/'+email);
   dbreff.on('value', (snapshot) =>{
     this.setState({
         destinatario :{
           photoURL:snapshot.val().photoURL,
           displayName:snapshot.val().displayName,
           email:snapshot.val().emailll
       }      
       })
});
   let miemail = this.state.user.email;
   miemail= miemail.replace("@","");
   miemail=  miemail.replace(".","");
   miemail= miemail.replace("$","");
   

  //cont = 0
  
   const dbRef = db.ref('usuarios/'+miemail+'/'+'chat/'+email);
   //const usus = dbRef.child(email);
   
   dbRef.on("child_added", snapshot =>{  
   
       array[cont]=snapshot.val();
       cont++;
   },
   ()=>{
      this.setState({
      datachat:array
    });
   }
   );
   if (array !=='') {
    let num = window.screen.width;
    if (num <=768) {
       this.setState({
         

       datachat:array,
       loading:false,
       activarchat:true,
       clasname:'12',
       activarbarra2:false,
       responsi:'visibleimportant'
     }); 
    }else{
      this.setState({
       datachat:array,
        loading:false,
        activarchat:true,
        clasname:'12',
        activarbarra2:false,
        responsi:'visible'
      }); 
    }
     
   }
   


     
}
buscaramigos = e =>{

  this.setState({
    buscaramigos:true,
    listadechat:false,
    perfil:false,
    iniciochat:false
  });
}
listachat = e =>{
  
  this.setState({
    
    buscaramigos:false,
    listadechat:true,
    perfil:false,
    iniciochat:false
  });
 
}
perfil= e =>{

   this.setState({
    buscaramigos:false,
    listadechat:false,
    perfil:true,
    iniciochat:false
  });
}
searchamigos = e =>{


this.setState({
  searchamigos:e.target.value
})
}
preventDefault = e=>{
  const db = firebase.database();
    e.preventDefault();
    let resultado = this.state.searchamigos;
    let bandera=false;
    let array=[];
    let cont=0;
    let tipo = document.getElementById('tipodebusqueda').value;
    console.log('el tipo de busqueda es',tipo)
    switch(tipo) {
				
      case 'email' :
        
     const dbRef = db.ref('usuarios/');
     dbRef.on("child_added", snapshot =>{
       if (snapshot.val().emailll == resultado) {
        bandera=true;
         array[cont]=snapshot.val();
         cont++
       }
       
     });
     if (bandera == false) {
       let resu = 'no existe el email '+resultado;
       this.setState({
        resultadodebusqueda:resu,
        searchamigosbarra:true,
           searchresultbarra:false,
       })
       }else{
         this.setState({
           searchamigosbarra:false,
           searchresultbarra:true,
           data:array
         })
        
      }
  

      break
      case 'nombre' :    
      
   const dbReff = db.ref('usuarios/');
   dbReff.on("child_added", snapshot =>{
     if (snapshot.val().displayName == resultado) {
      bandera=true;
       array[cont]=snapshot.val();
       cont++
     }
     
   });
   if (bandera == false) {
    let resu = 'no existe el nombre '+resultado;
    this.setState({
      resultadodebusqueda:resu,
      searchamigosbarra:true,
      searchresultbarra:false
    })
    }else{
      this.setState({
        searchamigosbarra:false,
        searchresultbarra:true,
      data:array
      })
    }
 

      break
  
      default: //
    }
  
       
}
editarnombre = e =>{ 
  this.setState({
    editarnombre:e.target.value 
  })}

editarabrir=e =>{
this.setState({
perfilll:false,
editar:true
})

}
editarcerrar=e =>{
  this.setState({
    perfilll:true,
    editar:false
    })
  
}
funactivarbarra2=e=>{
  this.setState({
    activarbarra1:false,
    activarbarra2:true
  })
}
activarbarralateral= e=>{
  let num = window.screen.width;
  if (num <=768) {
    this.setState({
      responsi:'invisible',
      clasname:'9',
      activarbarra2:true,

    }); 
  }else{this.setState({

    clasname:'9',
    activarbarra2:true
  }); }

  
}
cambiarfotodeperfil= e=>{

const file = e.target.files[0];
let ale = URL.createObjectURL(file)
let aleee = file

this.setState({
  imgcambiarperfilF:ale,
  imgcambiarperfil:aleee
})
}
enviarForms = e =>{
  e.preventDefault();
  this.enviarText();
}
abrirenviarimg = e=>{ 
 this.setState({
   
   enviarimg:true,
   desenfocar:'denfocar',
   cerraradjuntar:'flex',
    adjucar:'none',
   
 }) 
}
cerrarenviarimg=e=>{
  this.setState({
    enviarimg:false,
    desenfocar:'',
    cerraradjuntar:'none',
    adjucar:'flex',
  }) 
 } 
 activarmodal= e=>{
  this.setState({
    difuminar: 'difuminar',
 modal:true
  })
 
 }
 cerrarmodal = e =>{
  this.setState({
    difuminar: '',
 modal:false
  })
 }
 enviarimg=e=>{

  let foto = this.state.imgcambiarperfil;
let nombrefoto = foto.name;
var newPostKey = firebase.database().ref().push().key;
  let miemail  = this.props.history.location.search.substr(1);
  miemail= miemail.replace("@","");
  miemail=  miemail.replace(".","");
  miemail= miemail.replace("$","");
  let uiddestinatario = this.state.emailchat;
  
  const storegeRef = firebase.storage().ref(`img/${nombrefoto}!`);
const task = storegeRef.put(foto);
task.on('state_changed', snapshot=>{
  let porcentaje = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
  console.log(porcentaje);
  // this.setState({
  //   porcentajeeditarperfil:porcentaje,
  // })
},error=>{console.log(error.message)},()=>{
  var updates = {};
var postData ={
    
    Chat:'',
    chatFoto: task.snapshot.metadata.fullPath,
    foto: this.state.user.photoURL
    }
 updates['/usuarios/' + uiddestinatario + '/chat/'+'/'+miemail+'/'+ newPostKey] = postData;
  updates['/usuarios/' +  miemail + '/chat/'+'/'+uiddestinatario+'/'+ newPostKey] =postData;

  
  return firebase.database().ref().update(updates);
}) 
 



 }


    render(){
     
        return (
            <React.Fragment >
   
              <nav style={{ background:this.state.colorbarra}} className=" center    cajamenu">
      <img src={Logo} width="65px"></img>            

    </nav>

          <br></br>
         
          <div    className="container-fluid ">
              <div className =" row">
        
              {this.state.loading && <Loading />}  
              
              <Barrachat 
              click={this.click}
              data={ this.state.data}
              user={this.state.user }
              emailcontac={this.emailcontac}
              buscaramigos={this.buscaramigos}
              listachat={this.listachat}
              perfil={this.perfil}
              statebuscaramigos={this.state.buscaramigos}
              statelistadechat={this.state.listadechat }
              stateperfil={this.state.perfil }
              stateiniciochat={this.state.iniciochat}
              datamischats={this.state.datamischats}
              searchamigos = {this.searchamigos}
              preventDefault={this.preventDefault}
              statesearchamigos={this.state.searchamigos}
              searchamigosbarra={this.state.searchamigosbarra}
              searchresultbarra={this.state.searchresultbarra}
              resultadodebusqueda={this.state.resultadodebusqueda}
              editarnombre={this.editarnombre}
              stateeditarnombre={this.state.editarnombre}
              guardarloscambios={this.guardarloscambios}
              editarabrir= {this.editarabrir}
              editarcerrar={this.editarcerrar}
              perfilll={this.state.perfilll}
              editar={this.state.editar}
              infuser={this.state.infuser}
              sali={this.salir}
              activarbarra1={this.state.activarbarra1}
              activarbarra2={this.state.activarbarra2}
              funactivarbarra2={this.funactivarbarra2}
              
              
             />

                  <Cajachat 
                  porcentaje={this.state.porcentaje}
                   enviarimggg={this.enviarimg}
                  cerrarmodal={this.cerrarmodal} 
                  difuminar={this.state.difuminar}
                  activarmodal={this.activarmodal}
                  modal={this.state.modal}
                  avatarcambiarperfil={this.state.imgcambiarperfilF}
                  cambiarfotodeperfil={this.cambiarfotodeperfil}
                  cerraradjuntar={this.state.cerraradjuntar}
                  adjucar={this.state.adjucar}
                    cerrarenviarimg={this.cerrarenviarimg}
                  desenfocar={this.state.desenfocar}
                  abrirenviarimg={this.abrirenviarimg}
                  enviarimg={ this.state.enviarimg}
                    enviarForms={this.enviarForms} 
                  activarmee={this.state.activarmee}
                  activarbarralateral={this.activarbarralateral}
                  destinatario={this.state.destinatario}
                  chats = {this.state.datachat}
                  activarchat={this.state.activarchat}
                  mensaje={this.state.mensaje}
                  mensajestate={this.mensajestate}
                  enviarText = {this.enviarText}
                  clasname={this.state.clasname}
                  responsi={this.state.responsi}
                  />
       
    

              </div>
          </div>
          </React.Fragment>
          
        )
        
    }
}
export default Chat;