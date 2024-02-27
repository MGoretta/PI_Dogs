import {Route, BrowserRouter, Switch} from "react-router-dom"
import Detail from './views/detail/detail';
import Form from './views/form/form';
import Home from './views/home/home';
import Landing from './views/landing/landing';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/home" component= {Home} />
          <Route path="/home/:id" component= {Detail} />
          <Route path="/form" component= {Form} /> 
          <Route path="/landing" component= {Landing} />   
        </Switch>         
      </div>
    </BrowserRouter>
  );
}

export default App;
