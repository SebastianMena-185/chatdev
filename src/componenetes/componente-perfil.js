import React from "react";
import "./css-component/chat.css";

class perfil extends React.Component{
      state ={
          colorgris:'#e8e8e8',
          violeta : '#8605ff',
          amarillo:'#fff3cd'
      }
    render(){
        if (this.props.stateperfil == false || this.props.perfilll == false) return null;
       
       
        return(    
            <React.Fragment >
            
                <div id="" className="list-group iniciobarra padding0   center alert alert-warning">

                       <div className="">
                        <img className="imgperfilll" width="40%" src={this.props.infuser.photoURL} />
                     </div>
                     <ul className="list-group list-group-flush">
                        <li  style={{ background:this.state.colorgris}} className="list-group-item">Nombre:</li>
                        <li  style={{ background:this.state.colorgris}} className="list-group-item">{this.props.infuser.displayName}</li>
                        <li  style={{ background:this.state.colorgris}} className="list-group-item">E-mail: </li>
                        <li  style={{ background:this.state.colorgris}} className="list-group-item">{this.props.infuser.email}</li>
                         {/* <button onClick={this.props.editarabrir}   type="button" className="btn botoneditar btn-sm">Editar 
                         <img width='20px' className="float-right" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDc3Ljg3MyA0NzcuODczIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NzcuODczIDQ3Ny44NzM7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMzkyLjUzMywyMzguOTM3Yy05LjQyNiwwLTE3LjA2Nyw3LjY0MS0xNy4wNjcsMTcuMDY3VjQyNi42N2MwLDkuNDI2LTcuNjQxLDE3LjA2Ny0xNy4wNjcsMTcuMDY3SDUxLjINCgkJCWMtOS40MjYsMC0xNy4wNjctNy42NDEtMTcuMDY3LTE3LjA2N1Y4NS4zMzdjMC05LjQyNiw3LjY0MS0xNy4wNjcsMTcuMDY3LTE3LjA2N0gyNTZjOS40MjYsMCwxNy4wNjctNy42NDEsMTcuMDY3LTE3LjA2Nw0KCQkJUzI2NS40MjYsMzQuMTM3LDI1NiwzNC4xMzdINTEuMkMyMi45MjMsMzQuMTM3LDAsNTcuMDYsMCw4NS4zMzdWNDI2LjY3YzAsMjguMjc3LDIyLjkyMyw1MS4yLDUxLjIsNTEuMmgzMDcuMg0KCQkJYzI4LjI3NywwLDUxLjItMjIuOTIzLDUxLjItNTEuMlYyNTYuMDAzQzQwOS42LDI0Ni41NzgsNDAxLjk1OSwyMzguOTM3LDM5Mi41MzMsMjM4LjkzN3oiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTQ1OC43NDIsMTkuMTQyYy0xMi4yNTQtMTIuMjU2LTI4Ljg3NS0xOS4xNC00Ni4yMDYtMTkuMTM4Yy0xNy4zNDEtMC4wNS0zMy45NzksNi44NDYtNDYuMTk5LDE5LjE0OUwxNDEuNTM0LDI0My45MzcNCgkJCWMtMS44NjUsMS44NzktMy4yNzIsNC4xNjMtNC4xMTMsNi42NzNsLTM0LjEzMywxMDIuNGMtMi45NzksOC45NDMsMS44NTYsMTguNjA3LDEwLjc5OSwyMS41ODUNCgkJCWMxLjczNSwwLjU3OCwzLjU1MiwwLjg3Myw1LjM4LDAuODc1YzEuODMyLTAuMDAzLDMuNjUzLTAuMjk3LDUuMzkzLTAuODdsMTAyLjQtMzQuMTMzYzIuNTE1LTAuODQsNC44LTIuMjU0LDYuNjczLTQuMTMNCgkJCWwyMjQuODAyLTIyNC44MDJDNDg0LjI1LDg2LjAyMyw0ODQuMjUzLDQ0LjY1Nyw0NTguNzQyLDE5LjE0MnoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" />
                      </button>    */}<br/>
                    <button onClick={this.props.sali}    type="button" className="btn botoncerrarsesion btn-sm">Cerrar Sesion                <img width='20px' className="float-right" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxnPg0KCQkJPHBhdGggZD0iTTUxMC4zNzEsMjI2LjUxM2MtMS4wODgtMi42MDMtMi42NDUtNC45NzEtNC42MjktNi45NTVsLTYzLjk3OS02My45NzljLTguMzQxLTguMzItMjEuODI0LTguMzItMzAuMTY1LDANCgkJCQljLTguMzQxLDguMzQxLTguMzQxLDIxLjg0NSwwLDMwLjE2NWwyNy41ODQsMjcuNTg0SDMyMC4wMTNjLTExLjc5NywwLTIxLjMzMyw5LjU1Ny0yMS4zMzMsMjEuMzMzczkuNTM2LDIxLjMzMywyMS4zMzMsMjEuMzMzDQoJCQkJaDExOS4xNjhsLTI3LjU4NCwyNy41ODRjLTguMzQxLDguMzQxLTguMzQxLDIxLjg0NSwwLDMwLjE2NWM0LjE2LDQuMTgxLDkuNjIxLDYuMjUxLDE1LjA4Myw2LjI1MXMxMC45MjMtMi4wNjksMTUuMDgzLTYuMjUxDQoJCQkJbDYzLjk3OS02My45NzljMS45ODQtMS45NjMsMy41NDEtNC4zMzEsNC42MjktNi45NTVDNTEyLjUyNSwyMzcuNjA2LDUxMi41MjUsMjMxLjcxOCw1MTAuMzcxLDIyNi41MTN6Ii8+DQoJCQk8cGF0aCBkPSJNMzYyLjY4LDI5OC42NjdjLTExLjc5NywwLTIxLjMzMyw5LjU1Ny0yMS4zMzMsMjEuMzMzdjEwNi42NjdoLTg1LjMzM1Y4NS4zMzNjMC05LjQwOC02LjE4Ny0xNy43MjgtMTUuMjExLTIwLjQzNw0KCQkJCWwtNzQuMDkxLTIyLjIyOWgxNzQuNjM1djEwNi42NjdjMCwxMS43NzYsOS41MzYsMjEuMzMzLDIxLjMzMywyMS4zMzNzMjEuMzMzLTkuNTU3LDIxLjMzMy0yMS4zMzN2LTEyOA0KCQkJCUMzODQuMDEzLDkuNTU3LDM3NC40NzcsMCwzNjIuNjgsMEgyMS4zNDdjLTAuNzY4LDAtMS40NTEsMC4zMi0yLjE5NywwLjQwNWMtMS4wMDMsMC4xMDctMS45MiwwLjI3Ny0yLjg4LDAuNTEyDQoJCQkJYy0yLjI0LDAuNTc2LTQuMjY3LDEuNDUxLTYuMTY1LDIuNjQ1Yy0wLjQ2OSwwLjI5OS0xLjA0NSwwLjMyLTEuNDkzLDAuNjYxQzguNDQsNC4zNTIsOC4zNzYsNC41ODcsOC4yMDUsNC43MTUNCgkJCQlDNS44OCw2LjU0OSwzLjkzOSw4Ljc4OSwyLjUzMSwxMS40NTZjLTAuMjk5LDAuNTc2LTAuMzYzLDEuMTk1LTAuNTk3LDEuNzkyYy0wLjY4MywxLjYyMS0xLjQyOSwzLjItMS42ODUsNC45OTINCgkJCQljLTAuMTA3LDAuNjQsMC4wODUsMS4yMzcsMC4wNjQsMS44NTZjLTAuMDIxLDAuNDI3LTAuMjk5LDAuODExLTAuMjk5LDEuMjM3VjQ0OGMwLDEwLjE3Niw3LjE4OSwxOC45MjMsMTcuMTUyLDIwLjkwNw0KCQkJCWwyMTMuMzMzLDQyLjY2N2MxLjM4NywwLjI5OSwyLjc5NSwwLjQyNyw0LjE4MSwwLjQyN2M0Ljg4NSwwLDkuNjg1LTEuNjg1LDEzLjUyNS00Ljg0M2M0LjkyOC00LjA1Myw3LjgwOC0xMC4wOTEsNy44MDgtMTYuNDkxDQoJCQkJdi0yMS4zMzNIMzYyLjY4YzExLjc5NywwLDIxLjMzMy05LjU1NywyMS4zMzMtMjEuMzMzVjMyMEMzODQuMDEzLDMwOC4yMjQsMzc0LjQ3NywyOTguNjY3LDM2Mi42OCwyOTguNjY3eiIvPg0KCQk8L2c+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" />
                    </button>
                    </ul>
                   
                </div>
            </React.Fragment>
        )
    }
}

export default perfil;