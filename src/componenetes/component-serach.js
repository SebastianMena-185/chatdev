import React from "react";
import "./css-component/chat.css";

class serach extends React.Component{
      
    render(){
        if (this.props.searchamigosbarra == false) return null;
        return(    
            <React.Fragment >
                <div className="list-group iniciosearch  alert alert-warning">
                     <img className="imginiciobarra" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSIiIGQ9Ik00OTMuMjEsNDUwLjc5YzExLjcyLDExLjcxLDExLjcyLDMwLjcxLDAsNDIuNDJjLTUuODYsNS44Ni0xMy41Myw4Ljc5LTIxLjIxLDguNzkgIHMtMTUuMzUtMi45My0yMS4yMS04Ljc5bC05Ni41Ny05Ni41N2MxNS43Ny0xMi40LDMwLjAyLTI2LjY1LDQyLjQyLTQyLjQyTDQ5My4yMSw0NTAuNzl6IiBmaWxsPSIjZDdhYWZmIiBkYXRhLW9yaWdpbmFsPSIjNGRiYmViIj48L3BhdGg+CjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9IiIgZD0iTTM1My44MywzMTEuNDFsNDIuODEsNDIuODFjLTEyLjQsMTUuNzctMjYuNjUsMzAuMDItNDIuNDIsNDIuNDJsLTQyLjgxLTQyLjgxdi0wLjAxICBjMTYuMjctMTEuODEsMzAuNi0yNi4xNCw0Mi40MS00Mi40MUgzNTMuODN6IiBmaWxsPSIjODcwMGZmIiBkYXRhLW9yaWdpbmFsPSIjZmZmNWNkIiBjbGFzcz0iIj48L3BhdGg+CjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9IiIgZD0iTTM5MCwyMDBjMCw0MS41OC0xMy40Myw4MC4wOS0zNi4xOCwxMTEuNDFjLTExLjgxLDE2LjI3LTI2LjE0LDMwLjYtNDIuNDEsNDIuNDEgIEMyODAuMDksMzc2LjU3LDI0MS41OCwzOTAsMjAwLDM5MEM5NS4yMywzOTAsMTAsMzA0Ljc3LDEwLDIwMFM5NS4yMywxMCwyMDAsMTBTMzkwLDk1LjIzLDM5MCwyMDB6IiBmaWxsPSIjZDdhYWZmIiBkYXRhLW9yaWdpbmFsPSIjNGRiYmViIj48L3BhdGg+CjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9IiIgZD0iTTIwMCw1MGM4Mi43MSwwLDE1MCw2Ny4yOSwxNTAsMTUwcy02Ny4yOSwxNTAtMTUwLDE1MFM1MCwyODIuNzEsNTAsMjAwUzExNy4yOSw1MCwyMDAsNTB6IiBmaWxsPSIjZWRkYWZlIiBkYXRhLW9yaWdpbmFsPSIjYmVlN2Y0IiBjbGFzcz0iIj48L3BhdGg+CjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0iTTUwMC4yODEsNDQzLjcxOWwtMTMzLjQ4LTEzMy40OEMzODguNTQ2LDI3Ny40ODUsNDAwLDIzOS41NTUsNDAwLDIwMEM0MDAsODkuNzIsMzEwLjI4LDAsMjAwLDBTMCw4OS43MiwwLDIwMCAgczg5LjcyLDIwMCwyMDAsMjAwYzM5LjU1NiwwLDc3LjQ4Ni0xMS40NTUsMTEwLjIzOS0zMy4xOThsMzYuODk1LDM2Ljg5NWMwLjAwNSwwLjAwNSwwLjAxLDAuMDEsMC4wMTYsMC4wMTZsOTYuNTY4LDk2LjU2OCAgQzQ1MS4yNzYsNTA3LjgzOCw0NjEuMzE5LDUxMiw0NzIsNTEyczIwLjcyNC00LjE2MiwyOC4yNzgtMTEuNzE2QzUwNy44MzcsNDkyLjczMSw1MTIsNDgyLjY4Nyw1MTIsNDcyICBTNTA3LjgzNyw0NTEuMjY5LDUwMC4yODEsNDQzLjcxOXogTTMyNi41MTYsMzU0Ljc5M2MxMC4zNS04LjQ2NywxOS44MTEtMTcuOTI4LDI4LjI3Ny0yOC4yNzdsMjguMzcxLDI4LjM3MSAgYy04LjYyOCwxMC4xODMtMTguMDk0LDE5LjY1LTI4LjI3NywyOC4yNzdMMzI2LjUxNiwzNTQuNzkzeiBNMjAsMjAwYzAtOTkuMjUyLDgwLjc0OC0xODAsMTgwLTE4MHMxODAsODAuNzQ4LDE4MCwxODAgIGMwLDM4LjE3NS0xMS44NTEsNzQuNjY3LTM0LjI3MiwxMDUuNTM1Yy0xMS4yMTcsMTUuNDUzLTI0LjczOSwyOC45NzYtNDAuMTkyLDQwLjE5MmMwLDAuMDAxLTAuMDAxLDAuMDAxLTAuMDAyLDAuMDAyICBDMjc0LjY2NywzNjguMTQ5LDIzOC4xNzUsMzgwLDIwMCwzODBDMTAwLjc0OCwzODAsMjAsMjk5LjI1MiwyMCwyMDB6IE00ODYuMTM5LDQ4Ni4xMzljLTMuNzgsMy43OC04LjgwMSw1Ljg2MS0xNC4xMzksNS44NjEgIHMtMTAuMzU5LTIuMDgxLTE0LjEzOS01Ljg2MWwtODguNzk1LTg4Ljc5NWMxMC4xMjctOC42OTEsMTkuNTg3LTE4LjE1LDI4LjI3Ny0yOC4yNzdsODguNzk4LDg4Ljc5OCAgQzQ4OS45MTksNDYxLjYzOSw0OTIsNDY2LjY1OCw0OTIsNDcyUzQ4OS45MTksNDgyLjM2MSw0ODYuMTM5LDQ4Ni4xMzl6IiBmaWxsPSIjMDAwMDAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+CjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0iTTM2MCwyMDBjMC04OC4yMjUtNzEuNzc1LTE2MC0xNjAtMTYwUzQwLDExMS43NzUsNDAsMjAwczcxLjc3NSwxNjAsMTYwLDE2MFMzNjAsMjg4LjIyNSwzNjAsMjAweiBNMjAwLDM0MCAgYy03Ny4xOTYsMC0xNDAtNjIuODA0LTE0MC0xNDBTMTIyLjgwNCw2MCwyMDAsNjBzMTQwLDYyLjgwNCwxNDAsMTQwUzI3Ny4xOTYsMzQwLDIwMCwzNDB6IiBmaWxsPSIjMDAwMDAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+CjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0iTTMwNi4zMTcsMTY5Ljk5NWM1LjE1NS0xLjk4MSw3LjcyOS03Ljc2Niw1Ljc0OC0xMi45MjJjLTguNjExLTIyLjQxMi0yMy42MDQtNDEuNTc0LTQzLjM2LTU1LjQxMyAgQzI0OC40NzksODcuNDksMjI0LjcyMSw4MCwyMDAsODBjLTUuNTIyLDAtMTAsNC40NzgtMTAsMTBzNC40NzgsMTAsMTAsMTBjNDEuMDk5LDAsNzguNjMxLDI1LjgxOCw5My4zOTYsNjQuMjQ3ICBjMS41MjgsMy45NzYsNS4zMTcsNi40MTYsOS4zMzcsNi40MTZDMzAzLjkyNSwxNzAuNjYzLDMwNS4xMzgsMTcwLjQ0OCwzMDYuMzE3LDE2OS45OTV6IiBmaWxsPSIjMDAwMDAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+CjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0iTTMxMCwxOTBjLTUuNTIsMC0xMCw0LjQ4LTEwLDEwczQuNDgsMTAsMTAsMTBzMTAtNC40OCwxMC0xMFMzMTUuNTIsMTkwLDMxMCwxOTB6IiBmaWxsPSIjMDAwMDAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4=" />
                     <p>{this.props.resultadodebusqueda}</p>
                </div>
            </React.Fragment>
        )
    }
}

export default serach;