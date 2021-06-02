import React from 'react';
import {Switch,Route,} from "react-router-dom";
import {Nav,NavLink,NavMenu,} from './styled';
import List from '../List';
import UserCounter from '../UserCounter';

const Navbar = () => {
  return (
    <div>
        <Nav>
            <NavMenu>
                <NavLink to='/HomePage'>
                    Home Page
                </NavLink>
                <NavLink to='/MergerRanking'>
                Merger Ranking
                </NavLink>
            </NavMenu>
        </Nav>
        <Switch>
            <Route exact path='/'>
                <List/>
            </Route>
            <Route exact path='/HomePage'>
                <List/>
            </Route>
            <Route path='/MergerRanking'>
                <UserCounter/>
            </Route>
        </Switch>
    </div>
  );
};

export default Navbar;