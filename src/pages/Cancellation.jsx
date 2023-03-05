import React from "react";
import Layout from "../Layout/Layout";

const Cancellation = () => {
  return (
    <Layout>
      <div className="container mt-5">
        <h3>Cancellation & Refund Policy</h3>
        <p className="text-muted">Last updated on Feb 19th 2023</p>
        <p>
          KAPESTAR PRIVATE LIMITED believes in helping its customers as far as
          possible, and has therefore a liberal cancellation policy. Under this
          policy:
        </p>

        <ul
          style={{
            listStyle: "unset",
            paddingLeft: "1rem",
          }}
        >
          <li>
            Cancellations will be considered only if the request is made
            immediately after placing the order. However, the cancellation
            request may not be entertained if the orders have been communicated
            to the vendors/merchants and they have initiated the process of
            shipping them.
          </li>

          <li>
            KAPESTAR PRIVATE LIMITED does not accept cancellation requests for
            perishable items like flowers, eatables etc. However,
            refund/replacement can be made if the customer establishes that the
            quality of product delivered is not good.
          </li>

          <li>
            In case of receipt of damaged or defective items please report the
            same to our Customer Service team. The request will, however, be
            entertained once the merchant has checked and determined the same at
            his own end. This should be reported within 7 days of receipt of the
            products.
          </li>

          <li>
            In case you feel that the product received is not as shown on the
            site or as per your expectations, you must bring it to the notice of
            our customer service within 7 days of receiving the product. The
            Customer Service Team after looking into your complaint will take an
            appropriate decision.
          </li>

          <li>
            In case of complaints regarding products that come with a warranty
            from manufacturers, please refer the issue to them.
          </li>

          <li>
            In case of any Refunds approved by the KAPESTAR PRIVATE LIMITED,
            it’ll take 9-15 days for the refund to be processed to the end
            customer.
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default Cancellation;
