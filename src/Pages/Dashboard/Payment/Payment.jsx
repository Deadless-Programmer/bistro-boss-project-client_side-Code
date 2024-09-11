import React from "react";
import SectionTitle from "../../../components/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
  return (
    <div>
      <SectionTitle
        subHeading={"Use payment"}
        heading={"Payment Page"}
      ></SectionTitle>



      <Elements stripe={stripePromise}>
     <CheckOutForm></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payment;
