import React from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import KindsOfButton from './kindsOfButton';
import KindsOfInput from './kindsOfInput';


function App(){


    return (
 <Router>

           <div className="main">

          
            <div className="sidebar">
            <nav className="nav">
                   
                    <NavLink className="nav-list__item" activeClassName="active" exact  to="/"> All</NavLink>
                    <NavLink className="nav-list__item" activeClassName="active"  to="/button"> Active</NavLink>
                    <NavLink className="nav-list__item" activeClassName="active"  to="/input"> Completed</NavLink>  
                  
                </nav>  
            </div>
            <div className="container">
                <div className="content">

               
            <Route path="/" exact>
                <h1>HOME</h1>
            </Route>
           <Route path="/button">
            <KindsOfButton/>
            </Route>
            
            <Route path="/input">
                <KindsOfInput/>
            </Route>
            </div>
            </div>
            </div>
     
        </Router>
    )
}

export default App