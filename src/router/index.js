import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Add from '../views/Add';
import Home from "../views/Home"


function Router(props) {
   return (
      <BrowserRouter>
         <Switch>
            <Route exact path='/'>
               <Navbar />
               <Home />
            </Route>
         </Switch>
         <Switch>
            <Route exact path='/add'>
               <Navbar />
               <Add />
            </Route>
         </Switch>
      </BrowserRouter>
   );
}

export default Router;