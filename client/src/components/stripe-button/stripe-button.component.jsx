import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_VJYXfuhTbA1yxw7xH0MYsxuR00F2uwMJ3x';

  const onToken = token => {
    axios({
      url: "payment",
      method: "POST",
      data: {
        amount: priceForStripe,
        token
      }
      
    })
      .then(response => {
        alert("succesful payment");
      })
      .catch(error => {
        console.log('Payment Error: ', console.log(error));
        console.log("AXIOS PAYMENT", axios.url)
        alert(
          'There was an issue with your payment! Please make sure you use the provided credit card.'
        );
      });
  };



  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}

    />
  );
};
export default StripeCheckoutButton;