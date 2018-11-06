import React from "react";
import Header from "./Header";
import TicketList from "./TicketList";
import MyStyledComponent from "./MyStyledComponent";
import ContentContainer from "./ContentContainer";
import { Switch, Route } from 'react-router-dom';
import Shop from './Shop';
import ShopItems from './ShopItems'

function App(){
  return (
    <div>
      <style global jsx>{`
        * {
          padding: none;
          margin: none;
        }
        `}</style>
      <Header/>
      <Switch>
        <Route exact path='/' component={ContentContainer} />
        <Route path='/Shop' component={ShopItems} />
      </Switch>
    </div>
  );
}

export default App;
