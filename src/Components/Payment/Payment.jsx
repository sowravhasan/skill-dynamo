
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from '@stripe/stripe-js';


const Payment = () => {
    const stripePromise = loadStripe('pk_test_51OECyPLYKsWVrIip2pVYLISTyoqAOS8ybbxzLPq4qyLXXJ8eLnsjPJLslJQXapBk7SnSy1WHppbDyM0oM20pR9xH006X0bwsYN');
    return (
        <div>
            <div className="bg-blue-900 rounded-lg p-6 mb-10">
                <h1 className="text-3xl font-bold text-gray-200">Pay Now</h1>
                
            </div>

            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;