import React from 'react';
import "./css-component/chat.css";
class listachatmaps extends React.Component {
    state ={
        colorgris:'#e8e8e8',
        violeta : '#8605ff',
        amarillo:'#fff3cd'
    }
    render(){
        return(
            <React.Fragment >
          
          <li  style={{ background:this.state.colorgris}}  className="list-group-item ">
              <img   className="imgcontactos" src={this.props.foto}></img>
               <div  className="text-left contactos"> {this.props.name}<br/> <small className="text-left">{this.props.email}</small>
               </div>
                 <img onClick={this.props.click, this.props.click}  id={this.props.email} className="iconoabrirchat" width="27px"src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTQ4MS41NzgxMjUgOS4yMzgyODFjLTMuOTg4MjgxLTUuNzgxMjUtMTAuNTU4NTk0LTkuMjM4MjgxLTE3LjU3ODEyNS05LjIzODI4MWgtMjI5LjMzMjAzMWMtMzUuMjg1MTU3IDAtNjQgMjguNzE0ODQ0LTY0IDY0djE2LjYxNzE4OGMuODMyMDMxLjc1IDEuNzg5MDYyIDEuMzI0MjE4IDIuNTc4MTI1IDIuMTM2NzE4bDg1LjMzNTkzNyA4NS4zMzIwMzJjMTIuMDkzNzUgMTIuMDc0MjE4IDE4Ljc1IDI4LjE2MDE1NiAxOC43NSA0NS4yNDYwOTMgMCAxNy4wODk4NDQtNi42NTYyNSAzMy4xNzU3ODEtMTguNzUgNDUuMjVsLTg1LjMzNTkzNyA4NS4zMzIwMzFjLS43ODkwNjMuNzg5MDYzLTEuNzQ2MDk0IDEuMzY3MTg4LTIuNTc4MTI1IDIuMTMyODEzdjM3Ljk1MzEyNWMwIDM1LjI4NTE1NiAyOC43MTQ4NDMgNjQgNjQgNjRoNzQuNjY0MDYyYzguODU1NDY5IDAgMTYuNzg5MDYzLTUuNDYwOTM4IDE5LjkyNTc4MS0xMy43MzgyODFsMTU0LjY2Nzk2OS00MDUuMzMyMDMxYzIuNTE1NjI1LTYuNTUwNzgyIDEuNjIxMDk0LTEzLjkxMDE1Ny0yLjM0NzY1Ni0xOS42OTE0MDd6bTAgMCIgZmlsbD0iIzg2MDVmZiIgZGF0YS1vcmlnaW5hbD0iIzIxOTZmMyIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTExOS44MjgxMjUgMzE4LjM3ODkwNmMtNy45NTcwMzEtMy4zMDg1OTQtMTMuMTYwMTU2LTExLjA5Mzc1LTEzLjE2MDE1Ni0xOS43MTA5Mzd2LTY0aC04NS4zMzU5MzhjLTExLjc3MzQzNyAwLTIxLjMzMjAzMS05LjU1ODU5NC0yMS4zMzIwMzEtMjEuMzM1OTM4IDAtMTEuNzczNDM3IDkuNTU4NTk0LTIxLjMzMjAzMSAyMS4zMzIwMzEtMjEuMzMyMDMxaDg1LjMzNTkzOHYtNjRjMC04LjYxNzE4OCA1LjIwMzEyNS0xNi40MDYyNSAxMy4xNjAxNTYtMTkuNzEwOTM4IDcuOTgwNDY5LTMuMzA4NTkzIDE3LjE1MjM0NC0xLjQ3MjY1NiAyMy4yNTM5MDYgNC42Mjg5MDdsODUuMzMyMDMxIDg1LjMzMjAzMWM4LjM0Mzc1IDguMzQzNzUgOC4zNDM3NSAyMS44MjQyMTkgMCAzMC4xNjQwNjJsLTg1LjMzMjAzMSA4NS4zMzU5MzhjLTYuMTAxNTYyIDYuMTAxNTYyLTE1LjI3MzQzNyA3LjkzMzU5NC0yMy4yNTM5MDYgNC42Mjg5MDZ6bTAgMCIgZmlsbD0iIzQwNDY0YSIgZGF0YS1vcmlnaW5hbD0iIzYwN2Q4YiIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTQ1NS43NDIxODggMi4xMTMyODEtMTI4LjE2Nzk2OSA0Mi43MzA0NjljLTE3LjMwMDc4MSA1Ljk3MjY1Ni0yOC45MDYyNSAyMi4yNS0yOC45MDYyNSA0MC40ODgyODF2Mzg0YzAgMjMuNTMxMjUgMTkuMTMyODEyIDQyLjY2Nzk2OSA0Mi42NjQwNjIgNDIuNjY3OTY5IDQuNTY2NDA3IDAgOC44OTg0MzgtLjY2MDE1NiAxMy41ODk4NDQtMi4xMTMyODFsMTI4LjE3MTg3NS00Mi43MzA0NjljMTcuMzAwNzgxLTUuOTcyNjU2IDI4LjkwNjI1LTIyLjI1IDI4LjkwNjI1LTQwLjQ4ODI4MXYtMzg0YzAtMjguMDk3NjU3LTI3LjMyODEyNS00OS40NTMxMjUtNTYuMjU3ODEyLTQwLjU1NDY4OHptMCAwIiBmaWxsPSIjZmZmM2NkIiBkYXRhLW9yaWdpbmFsPSIjNjRiNWY2IiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvc3ZnPg==" />
                 </li>
  
             
           
     </React.Fragment>  
     
     );

    }
}
export default listachatmaps ;