import React from "react";
import Header from "./Header";
import TicketList from "./TicketList";
import MyStyledComponent from "./MyStyledComponent";
import ContentContainer from "./ContentContainer";
import { Switch, Route } from 'react-router-dom';
import Shop from './Shop';
import ShopItems from './ShopItems';
import fnordersmarketlist from './fnordersmarketlist';
import PartyItems from './PartyItems';

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
        <Route path='/fnord' component={fnordersmarketlist}/>
        <Route path='/Party' component={PartyItems} />
      </Switch>
    </div>
  );
}

export default App;
