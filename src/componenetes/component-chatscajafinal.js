import react from "react";
import "./css-component/chat.css";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firebase-firestore";
import Ulchat from "./component-ulchat.js";
import Abririmg from "./component-subirimg.js";
import Modal from "./component-modelimg.js";
class cajachatfinal extends react.Component{
    state = {
        colorbarra : "#8605ff",
        color2 :"#bbbfca",
        color3: "#e8e8e8",
        color4: "#db6400",
        mensaje:[], 
        coloramarillo:'#fff3cd',
        margin:'3px 5px 10px 13px'

    }
   

    render(){ 
        if (this.props.activarchat !== true) return null;
        return(
          <react.Fragment>
           

             <div className={ ` alert alert-warning colornegro ${this.props.difuminar} `} role="alert">
            <img onClick={this.props.activarbarralateral}  className="float-left " width='40px'src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ5MC42NjcgNDkwLjY2NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9IiIgZD0iTTI0NS4zMzMsMEMxMDkuODM5LDAsMCwxMDkuODM5LDAsMjQ1LjMzM3MxMDkuODM5LDI0NS4zMzMsMjQ1LjMzMywyNDUuMzMzICBzMjQ1LjMzMy0xMDkuODM5LDI0NS4zMzMtMjQ1LjMzM0M0OTAuNTE0LDEwOS45MDMsMzgwLjc2NCwwLjE1MywyNDUuMzMzLDB6IiBmaWxsPSIjZmZmM2NkIiBkYXRhLW9yaWdpbmFsPSIjMDA5Njg4IiBjbGFzcz0iIj48L3BhdGg+CjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9IiIgZD0iTTM3My4zMzMsMTkySDI0OS43NDlsMTkuMi0xOS4yYzE4Ljg5My0xOC44ODEsMTguOTAyLTQ5LjUwMywwLjAyMS02OC4zOTUgIGMtMC4wMDctMC4wMDctMC4wMTQtMC4wMTQtMC4wMjEtMC4wMjFjLTE5LjE3OS0xOC4yNDctNDkuMzE3LTE4LjE4MS02OC40MTYsMC4xNDlMODIuMjE5LDIyMi42OTkgIGMtMTIuNDkyLDEyLjQ5Ni0xMi40OTIsMzIuNzUyLDAsNDUuMjQ4bDExOC4zMTUsMTE4LjE4N2MxNy41NjUsMjAuMTM3LDQ4LjEzLDIyLjIyMiw2OC4yNjcsNC42NTYgIGMyMC4xMzctMTcuNTY1LDIyLjIyMi00OC4xMyw0LjY1Ni02OC4yNjdjLTEuNDQ1LTEuNjU2LTMtMy4yMTItNC42NTYtNC42NTZsLTE5LjItMTkuMmgxMjMuNzMzICBjMjkuNDU1LDAsNTMuMzMzLTIzLjg3OCw1My4zMzMtNTMuMzMzUzQwMi43ODksMTkyLDM3My4zMzMsMTkyeiIgZmlsbD0iIzAwMDAwMCIgZGF0YS1vcmlnaW5hbD0iI2ZhZmFmYSIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+" />
             <img width='40px' className='border-radius espacio' src={this.props.destinatario.photoURL}></img>
             {this.props.destinatario.displayName}
            </div>
               <ul  style={{ background: 	this.state.color3}} className={`list-group overflow-auto list-group-flush cajaUL ${this.props.desenfocar}`}>
               {
                            this.props.chats.map((item,i) =>
                            {
                                return( 
                                    
                           <Ulchat 
                           chatFoto={item.chatFoto}
                            chat={item.Chat}
                            foto ={item.foto}
                            key={i}           
                            />
                            
                            )
                            })
                    }  
                    
                   
                  
                      


                 </ul>  
                 <Abririmg 
                 difuminar={this.props.difuminar}
                    enviarimg={ this.props.enviarimg}
                    activarmodal={this.props.activarmodal}
                  />
                  <Modal 
                  porcentaje={this.props.porcentaje}
                  enviarimggg={this.props.enviarimggg}
                  cerrarmodal={this.props.cerrarmodal} 
                   avatarcambiarperfil={this.props.avatarcambiarperfil}
                   cambiarfotodeperfil ={this.props.cambiarfotodeperfil}
                  modal={this.props.modal}
                  />



                    <form   onSubmit={this.props.enviarForms}>
                <div id="inferior"  className={`input-group mb-3 ${this.props.difuminar} overflow-auto alert alert-warning`}>
                   
               
                    <img width="30px" onClick={this.props.abrirenviarimg} className={`agregararchivo ${this.props.adjucar}`} src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDcxLjY0MSA0NzEuNjQxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NzEuNjQxIDQ3MS42NDE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNDMxLjY2Niw0OS40MTJjLTUxLjY5Mi01MC41NzgtMTM0LjMzLTUwLjU2Ny0xODYuMDA5LDAuMDI1TDI4LjkxMSwyNjYuMTg0Yy0zOS4xOTIsNDAuMTE2LTM4LjQ0MywxMDQuNDA3LDEuNjczLDE0My41OTkNCgkJCWMzOS40NTYsMzguNTQ4LDEwMi40NywzOC41NDgsMTQxLjkyNiwwbDE5Ni4yNjctMTk2LjI2N2MyNS41MTUtMjUuNTE1LDI1LjUxNS02Ni44ODQsMC05Mi4zOTkNCgkJCWMtMjUuNTE1LTI1LjUxNS02Ni44ODQtMjUuNTE1LTkyLjM5OSwwTDg4LjY0NCwzMDguODVjLTYuNTQ4LDYuNzgtNi4zNiwxNy41ODQsMC40MiwyNC4xMzJjNi42MTQsNi4zODgsMTcuMDk5LDYuMzg4LDIzLjcxMywwDQoJCQlMMzAwLjUxLDE0NS4yNDljMTIuNDQ5LTExLjkyNiwzMi4yMDktMTEuNTAxLDQ0LjEzNCwwLjk0OGMxMS41NjUsMTIuMDczLDExLjU2NSwzMS4xMTQsMCw0My4xODdMMTQ4LjM3OCwzODUuNjUNCgkJCWMtMjYuNTE0LDI2LjEzNy02OS4xOTcsMjUuODMxLTk1LjMzNC0wLjY4M2MtMjUuODczLTI2LjI0Ni0yNS44NzMtNjguNDA1LDAtOTQuNjUxTDI2OS43OSw3My41NjkNCgkJCWMzOC42MDgtMzguNjIyLDEwMS4yMTQtMzguNjMzLDEzOS44MzYtMC4wMjZjMzguNjIyLDM4LjYwNywzOC42MzMsMTAxLjIxNCwwLjAyNiwxMzkuODM2TDE5Mi45MDUsNDMwLjEyNg0KCQkJYy03LjE1OSw2LjEzMS03Ljk5MywxNi45MDUtMS44NjIsMjQuMDY0YzYuMTMxLDcuMTU5LDE2LjkwNSw3Ljk5MywyNC4wNjQsMS44NjJjMC42NjgtMC41NzIsMS4yOS0xLjE5NCwxLjg2Mi0xLjg2Mg0KCQkJbDIxNi43NDctMjE2Ljc0N0M0ODUuMDczLDE4NC45NTQsNDg0LjE1NiwxMDAuNzY5LDQzMS42NjYsNDkuNDEyeiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" />
                       <img width="25px" onClick={this.props.cerrarenviarimg} className={`agregararchivo ${this.props.cerraradjuntar}`} src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMjIuODggMjIuODgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDIyLjg4IDIyLjg4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBzdHlsZT0iZmlsbDojMUUyMDFEOyIgZD0iTTAuMzI0LDEuOTA5Yy0wLjQyOS0wLjQyOS0wLjQyOS0xLjE0MywwLTEuNTg3YzAuNDQ0LTAuNDI5LDEuMTQzLTAuNDI5LDEuNTg3LDBsOS41MjMsOS41MzkNCglsOS41MzktOS41MzljMC40MjktMC40MjksMS4xNDMtMC40MjksMS41NzEsMGMwLjQ0NCwwLjQ0NCwwLjQ0NCwxLjE1OSwwLDEuNTg3bC05LjUyMyw5LjUyNGw5LjUyMyw5LjUzOQ0KCWMwLjQ0NCwwLjQyOSwwLjQ0NCwxLjE0MywwLDEuNTg3Yy0wLjQyOSwwLjQyOS0xLjE0MywwLjQyOS0xLjU3MSwwbC05LjUzOS05LjUzOWwtOS41MjMsOS41MzljLTAuNDQ0LDAuNDI5LTEuMTQzLDAuNDI5LTEuNTg3LDANCgljLTAuNDI5LTAuNDQ0LTAuNDI5LTEuMTU5LDAtMS41ODdsOS41MjMtOS41MzlMMC4zMjQsMS45MDl6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" /> 
                

                    <input type="textarea" className="form-control overflow-auto overflow-auto buscador" placeholder="Enviar Mensaje" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={this.props.mensajestate} value={this.props.mensaje}/>
                   <img onClick={this.props.enviarText} className='enviarimg' width="30px"src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ0OCA0NDgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBvbHlnb24gcG9pbnRzPSIwLjIxMywzMiAwLDE4MS4zMzMgMzIwLDIyNCAwLDI2Ni42NjcgMC4yMTMsNDE2IDQ0OCwyMjQgICAiIGZpbGw9IiMwMDAwMDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcG9seWdvbj4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+" />
                              
                </div>
                </form>
           </react.Fragment>
            
        )
    }
}

export default cajachatfinal;