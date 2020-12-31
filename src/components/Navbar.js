import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar(props) {
   return (
      <div>
         <div className="p-5 bg-red-500 uppercase text-xs font-bold text-white">
            <div className="container mx-auto">
               <NavLink to="/">Dakarwan</NavLink>
            </div>
         </div>
      </div>
   );
}

export default Navbar;