import React from "react";
import Header from "./Header";
import TicketList from "./TicketList";
import MyStyledComponent from "./MyStyledComponent";
import ContentContainer from "./ContentContainer";
import { Switch, Route } from 'react-router-dom';

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
          <ContentContainer/>
    </div>
  );
}

export default App;
