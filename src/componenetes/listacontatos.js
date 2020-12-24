import React from 'react';
import "./css-component/chat.css";
class listcontact extends React.Component {
    state ={
        colorgris:'#e8e8e8',
        violeta : '#8605ff',
        amarillo:'#fff3cd'
    }
    render(){
        return(
            <React.Fragment >
          
 
              <a  style={{ background:this.state.colorgris}}  href="#" className="list-group-item list-group-item-action ">
               <img   className="imgcontactos" src={this.props.photoURL}></img>
               <div  className="text-left contactos"> {this.props.displayName}<br/> <small className="text-left">{this.props.emailll}</small>
               </div>
                <img name={this.props.emailll} onClick={this.props.emailcontac} className="iconoabrirchat" width="27px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDY0IDY0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0yNC4wMTUgMjEuOGExMC4wMTMgMTAuMDEzIDAgMCAwIDcuNzg1LTExLjhoMjYuMmE0IDQgMCAwIDEgNCA0djE2YTQgNCAwIDAgMSAtNCA0aC0xdjhsLTEwLThoLTE5YTQgNCAwIDAgMSAtNC00di04LjJ6IiBmaWxsPSIjZmZlOWEyIiBkYXRhLW9yaWdpbmFsPSIjYzBkYWZjIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMjQuMDE1IDIxLjhoLS4wMTV2OC4yYTQgNCAwIDAgMCA0IDRoMTlsMTAgOHYtOGguMDQ3di0yMGgtMjUuMjU1YTEwLjAwNyAxMC4wMDcgMCAwIDEgLTcuNzc3IDcuOHoiIGZpbGw9IiNmZmYzY2QiIGRhdGEtb3JpZ2luYWw9IiNkN2VjZmYiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im00MS41NzggMzRoLTEzLjU3OGE0IDQgMCAwIDEgLTQtNHYtMy45ODNjLS4zMzEtLjAxMS0uNjY1LS4wMTctMS0uMDE3LTExLjYgMC0yMSA2LjcxNi0yMSAxNSAwIDYuMjYxIDUuMzcgMTEuNjI2IDEzIDEzLjg3M3Y3LjEyN2wxMC4xMjctNi4wNzZoLjAyYzEwLjU5LS43NyAxOC44NTMtNy4xNTcgMTguODUzLTE0LjkyNGExMS43IDExLjcgMCAwIDAgLTIuNDIyLTd6IiBmaWxsPSIjODYwNWZmIiBkYXRhLW9yaWdpbmFsPSIjNzhhMGQ0IiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PGNpcmNsZSB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGN4PSIyMiIgY3k9IjEyIiBmaWxsPSIjZjBhZTQyIiByPSIxMCIgZGF0YS1vcmlnaW5hbD0iI2YwYWU0MiIgc3R5bGU9IiIgY2xhc3M9IiI+PC9jaXJjbGU+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMjAuOCAxMi4wMTktLjc2OS0zLjg0MmExLjg2MiAxLjg2MiAwIDAgMSAtLjAzMS0uMzU3IDEuODIgMS44MiAwIDAgMSAxLjgyLTEuODJoLjM2YTEuODIgMS44MiAwIDAgMSAxLjgyIDEuODIgMS44NjIgMS44NjIgMCAwIDEgLS4wMzUuMzU3bC0uNzY1IDMuODQyYTEuMjIgMS4yMiAwIDAgMSAtMS4yLjk4MSAxLjIyIDEuMjIgMCAwIDEgLTEuMi0uOTgxeiIgZmlsbD0iI2ZjZTc5NyIgZGF0YS1vcmlnaW5hbD0iI2ZjZTc5NyIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxjaXJjbGUgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBjeD0iMjIiIGN5PSIxNyIgZmlsbD0iI2ZjZTc5NyIgcj0iMiIgZGF0YS1vcmlnaW5hbD0iI2ZjZTc5NyIgc3R5bGU9IiIgY2xhc3M9IiI+PC9jaXJjbGU+PGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjNzhhMGQ0Ij48Y2lyY2xlIGN4PSIzNSIgY3k9IjI0IiByPSIyIiBmaWxsPSIjODYwNWZmIiBkYXRhLW9yaWdpbmFsPSIjNzhhMGQ0IiBzdHlsZT0iIiBjbGFzcz0iIj48L2NpcmNsZT48Y2lyY2xlIGN4PSI0MyIgY3k9IjI0IiByPSIyIiBmaWxsPSIjODYwNWZmIiBkYXRhLW9yaWdpbmFsPSIjNzhhMGQ0IiBzdHlsZT0iIiBjbGFzcz0iIj48L2NpcmNsZT48Y2lyY2xlIGN4PSI1MSIgY3k9IjI0IiByPSIyIiBmaWxsPSIjODYwNWZmIiBkYXRhLW9yaWdpbmFsPSIjNzhhMGQ0IiBzdHlsZT0iIiBjbGFzcz0iIj48L2NpcmNsZT48L2c+PGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjYzBkYWZjIj48cGF0aCBkPSJtMTUgNDVhMiAyIDAgMSAxIDItMiAyIDIgMCAwIDEgLTIgMnoiIGZpbGw9IiNmZmU5YTIiIGRhdGEtb3JpZ2luYWw9IiNjMGRhZmMiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMjMgNDVhMiAyIDAgMSAxIDItMiAyIDIgMCAwIDEgLTIgMnoiIGZpbGw9IiNmZmU5YTIiIGRhdGEtb3JpZ2luYWw9IiNjMGRhZmMiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMzEgNDVhMiAyIDAgMSAxIDItMiAyIDIgMCAwIDEgLTIgMnoiIGZpbGw9IiNmZmU5YTIiIGRhdGEtb3JpZ2luYWw9IiNjMGRhZmMiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==" />
               
             </a> 
           
     </React.Fragment>  
     
     );

    }
}
export default listcontact ;