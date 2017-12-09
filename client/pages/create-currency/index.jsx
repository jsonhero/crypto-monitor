import React from "react";
import { Control, Form, actions } from 'react-redux-form';
import axios from 'axios';

class CreateCurrency extends React.Component {
  
  onSubmit = (currency) => {
    // console.log(currency, 'currency');
    axios.post('http://localhost:3000/api/currency', currency);
  }

  render() {
    return (
      <div>
        Create Currency
        <Form
          model="currency"
          onSubmit={this.onSubmit}
        >
          <label htmlFor="currency.display_name">Display Name:</label>
          <Control.text model="currency.display_name" id="currency.display_name" />

          <label htmlFor="currency.currency_name">Currency Name:</label>
          <Control.text model="currency.currency_name" id="currency.currency_name" />

          <button>
            Finish Currency!
          </button>
        </Form>
      </div>
    );
  }
}

export default CreateCurrency;
