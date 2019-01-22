import React, { Component } from 'react'
import PaypalExpressBtn from 'react-paypal-express-checkout';

class Paypal extends Component {
  render() {
    const onSuccess = (payment) => {
      this.props.onSuccess(payment);
    }

    // {
    //   "paid": true,
    //   "cancelled": false,
    //   "payerID": "YW4XSZJQPVHEN",
    //   "paymentID": "PAY-7U398507EL329980RLRDFLBY",
    //   "paymentToken": "EC-98S361005G426002K",
    //   "returnUrl": "https://www.sandbox.paypal.com/?paymentId=PAY-7U398507EL329980RLRDFLBY&token=EC-98S361005G426002K&PayerID=YW4XSZJQPVHEN",
    //   "address": {
    //     "recipient_name": "test buyer",
    //     "line1": "1 Main St",
    //     "city": "San Jose",
    //     "state": "CA",
    //     "postal_code": "95131",
    //     "country_code": "US"
    //   },
    //   "email": "jasontbrown99-buyer@gmail.com"
    // }

    const onCancel = (data) => {
      console.log(JSON.stringify(data))
    }

    const onError = (err) => {
      console.log(JSON.stringify(err))
    }

    let env = 'sandbox';
    let currency = 'USD';
    let total = this.props.toPay;

    const client = {
      sandbox: 'AaWq2Ek_E5rB0jwc_zurRDMS82TNWi3-opbKsxVTnNsnOQrBduzIuEqNX-DzohUleihaz5NW8Eqo2_js',
      production: ''
    }
    return (
      <div>
        <PaypalExpressBtn 
          env={env}
          client={client}
          currency={currency}
          total={total}
          onError={onError}
          onSuccess={onSuccess}
          onCancel={onCancel}
          style={{
            size: 'medium',
            color: 'blue',
            shape: 'rect',
            label: 'checkout'
          }}
        />
      </div>
    )
  }
}
export default Paypal;
