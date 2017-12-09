import React from "react";
import { Control, Form, actions } from 'react-redux-form';
import axios from 'axios';

class CreateMarket extends React.Component {
  
  onSubmit = (market) => {

    const m = {
      market_name: market.market_name,
      api_path: market.api_path,
      api_translation: {
        ask: market.t_ask,
        bid: market.t_bid,
        price: market.t_price,
      },
    }
    
    axios.post('http://localhost:3000/api/market', m);
  }

  render() {
    return (
      <div>
        Create Market
        <Form
          model="market"
          onSubmit={this.onSubmit}
        >
        <div>
          <label>Market Name:</label>
          <Control.text model="market.market_name" />
        </div>
        <div>
          <label>API Path:</label>
          <Control.text model="market.api_path" />
        </div>
        <div>
          <label>Price Translation:</label>
            <Control.text model="market.t_price" />
        </div>
        <div>
          <label>Bid Translation:</label>
            <Control.text model="market.t_bid" />
        </div>
        <div>
          <label>Ask Translation:</label>
            <Control.text model="market.t_ask" />
        </div>
        <div>
          <button>
            Finish Market!
          </button>
        </div>
        </Form>
      </div>
    );
  }
}

export default CreateMarket;
