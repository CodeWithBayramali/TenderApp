import React from "react";
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import Home from "./components/Main/Home";
import SignIn from "./components/SignIn";
import Navi from "./components/Main/Navi";
import SignUp from "./components/Register";
import MainAdminPage from "./components/Admin/MainAdminPage";

function App() {
  return (
    <div className="App" style={{ backgroundColor:"#FAFAFA" }}>
      <Router>
      <Navi />
      
      <Switch>
        <Route path="/" exact component={Home } />
        <Route path="/login" component={SignIn} />
        <Route path="/register" component={SignUp} />
        <Route path="/adminpage" component={MainAdminPage} />
      </Switch>
      </Router>
      
    </div>
  );
}

export default App;
