import React from "react";
import "./css-component/chat.css";

class editar extends React.Component{
      state ={
          colorgris:'#e8e8e8',
          violeta : '#8605ff',
          amarillo:'#fff3cd',
          margin:'0px 10px 8px 9px'
      }
    render(){
        if (this.props.editar == false || this.props.stateperfil == false) return null;
        // if (this.props.editar == true) return null; || this.props.editar == false
       
        return(    
            <React.Fragment >
            
                <div id="perfilEditar" className="list-group iniciobarra padding0   center alert alert-warning">
                                 <img width='20px' onClick={this.props.editarcerrar} className="float-right " src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjMyOXB0IiB2aWV3Qm94PSIwIDAgMzI5LjI2OTMzIDMyOSIgd2lkdGg9IjMyOXB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0xOTQuODAwNzgxIDE2NC43Njk1MzEgMTI4LjIxMDkzOC0xMjguMjE0ODQzYzguMzQzNzUtOC4zMzk4NDQgOC4zNDM3NS0yMS44MjQyMTkgMC0zMC4xNjQwNjMtOC4zMzk4NDQtOC4zMzk4NDQtMjEuODI0MjE5LTguMzM5ODQ0LTMwLjE2NDA2MyAwbC0xMjguMjE0ODQ0IDEyOC4yMTQ4NDQtMTI4LjIxMDkzNy0xMjguMjE0ODQ0Yy04LjM0Mzc1LTguMzM5ODQ0LTIxLjgyNDIxOS04LjMzOTg0NC0zMC4xNjQwNjMgMC04LjM0Mzc1IDguMzM5ODQ0LTguMzQzNzUgMjEuODI0MjE5IDAgMzAuMTY0MDYzbDEyOC4yMTA5MzggMTI4LjIxNDg0My0xMjguMjEwOTM4IDEyOC4yMTQ4NDRjLTguMzQzNzUgOC4zMzk4NDQtOC4zNDM3NSAyMS44MjQyMTkgMCAzMC4xNjQwNjMgNC4xNTYyNSA0LjE2MDE1NiA5LjYyMTA5NCA2LjI1IDE1LjA4MjAzMiA2LjI1IDUuNDYwOTM3IDAgMTAuOTIxODc1LTIuMDg5ODQ0IDE1LjA4MjAzMS02LjI1bDEyOC4yMTA5MzctMTI4LjIxNDg0NCAxMjguMjE0ODQ0IDEyOC4yMTQ4NDRjNC4xNjAxNTYgNC4xNjAxNTYgOS42MjEwOTQgNi4yNSAxNS4wODIwMzIgNi4yNSA1LjQ2MDkzNyAwIDEwLjkyMTg3NC0yLjA4OTg0NCAxNS4wODIwMzEtNi4yNSA4LjM0Mzc1LTguMzM5ODQ0IDguMzQzNzUtMjEuODI0MjE5IDAtMzAuMTY0MDYzem0wIDAiLz48L3N2Zz4=" />
                               
  <div> <img width='40%' className="border-radius" src={this.props.avatarcambiarperfil}></img>
   </div>
     <br/> 
     <form>
     <div className="form-group">
     <div className="progress">
  <div className="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>  
<br/>                        
   <div className="custom-input-file btn">Subir foto...<img  style={{margin: this.state.margin}}  width='20px'    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0zODAuMDMyLDEzMy40NzJsLTExMi0xMjhDMjY0Ljk5MiwyLjAxNiwyNjAuNjA4LDAsMjU2LDBjLTQuNjA4LDAtOC45OTIsMi4wMTYtMTIuMDMyLDUuNDcybC0xMTIsMTI4DQoJCQljLTQuMTI4LDQuNzM2LTUuMTUyLDExLjQyNC0yLjUyOCwxNy4xNTJDMTMyLjAzMiwxNTYuMzIsMTM3LjcyOCwxNjAsMTQ0LDE2MGg2NHYyMDhjMCw4LjgzMiw3LjE2OCwxNiwxNiwxNmg2NA0KCQkJYzguODMyLDAsMTYtNy4xNjgsMTYtMTZWMTYwaDY0YzYuMjcyLDAsMTEuOTY4LTMuNjQ4LDE0LjU2LTkuMzc2QzM4NS4xNTIsMTQ0Ljg5NiwzODQuMTkyLDEzOC4xNzYsMzgwLjAzMiwxMzMuNDcyeiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNDMyLDM1MnY5Nkg4MHYtOTZIMTZ2MTI4YzAsMTcuNjk2LDE0LjMzNiwzMiwzMiwzMmg0MTZjMTcuNjk2LDAsMzItMTQuMzA0LDMyLTMyVjM1Mkg0MzJ6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" />
<input id='cambiarfotodeperfil' onChange={this.props.cambiarfotodeperfil} type="file" id="fichero-tarifas" className="input-file" accept="image/png, image/jpeg"/>

</div>
                  
                     <ul className="list-group list-group-flush">
                        <li  style={{ background:this.state.colorgris}} className="list-group-item">Nombre:</li>
                        <div style={{ background:this.state.colorgris}} className="input-group">
                          
                            <input onChange={this.props.editarnombre} value={this.props.stateeditarnombre}  style={{ background:this.state.colorgris}} type="text" aria-label="First name" className="form-control inputeditar"/>
                          
                         </div>
                         
                    <button onClick={this.props.guardarloscambios} style={{ background:this.state.amarillo}}  type="button" className="btn  btn-sm">Guardar </button>
                    </ul>
                    </div>
                   </form>
                </div>
            </React.Fragment>
        )
    }
}

export default editar;