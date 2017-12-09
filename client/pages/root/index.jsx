import React from "react";
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import CreateCurrency from "../create-currency";
import CreateMarket from "../create-market";

import Home from "../home";
import Nav from "../../containers/nav";

const Content = styled.div`
  margin: 0 auto;
  width: 1024px;
`;

const Root = () => (
  <div>
    <div>
      <Nav />
    </div>
    <Content>
      <Route path="/" component={Home} exact />
      <Route path="/create/currency" component={CreateCurrency} />
      <Route path="/create/market" component={CreateMarket} />
      {/* <Route path="/edit/market" component={CreateCurrency} /> */}
    </Content>
  </div>
);

export default Root;
