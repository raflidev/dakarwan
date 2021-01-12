import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Add from '../views/Add';
import Home from "../views/Home"
import Edit from "../views/Edit"


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
         <Switch>
            <Route exact path='/edit/:id_karyawan'>
               <Navbar />
               <Edit />
            </Route>
         </Switch>
      </BrowserRouter>
   );
}

export default Router;