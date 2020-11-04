import "bootstrap/dist/css/bootstrap.css";
import Home from "./page-home.js";
import Chat from "./page-chat.js";
import {BrowserRouter, Route,Switch} from "react-router-dom";
function App() {
  return (
  <BrowserRouter>
  <Switch>
    <Route exact path="/Chat" component={Chat} />
    <Route exact path="/" component={Home} />
  </Switch>
  </BrowserRouter>
  
  )
}

export default App;
