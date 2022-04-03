import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishablekey = "pk_test_51KkOJoD5MVWfR3ugpzYlEFltzV4pPf9VsSnWutju1Msl16HqZBEdkDBZ1DPAbP8527vcTp2re0N7IrwhTj5Lz0Ro007JiG4bfo";
   
    const onToken = token => {
        console.log(token)
        alert("Payment Successful")
    }

    return (
        <StripeCheckout 
        label="Pay Now ⭐"
        bitcoin
        name="Trend Clothing Ltd"
        billingAddress
        shippingAddress
        alipay
        image="http://4.bp.blogspot.com/-u2iZfzA_ffA/VY-OzzuAevI/AAAAAAAAAK0/CRkPsfLGNHs/s1600/picture008.jpg"
        description={`Your Total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishablekey}
        />
    )
}

export default StripeCheckoutButton;