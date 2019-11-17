import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";

import Home from "./Home";
import Itemlist from "./Itemlist";
import ItemDesc from "./ItemDesc";
import Contact from "./Contact";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Simple - Single Page Application</h1>
          <ul className="header">
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/itemlist">Item List</NavLink>
            </li>
            <li>
              <NavLink to="/itemDesc">Item Description</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/itemlist" component={Itemlist} />
            <Route path="/itemDesc" component={ItemDesc} />
            <Route path="/contact" component={Contact} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
