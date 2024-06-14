import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";


const CheckoutForm = () => {
    const [error, setError] = useState("");
    const [transactionId, setTransactionId] = useState("");
    const [clientSecret, setClientSecret]= useState("");
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    // const [cart] = useCart();
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    const { data: cart =[] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
         const res = await axiosSecure.get(`/cart?email=${user?.email}`);
        return res.data
     } 
    })



    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    useEffect( () => {
        axiosSecure.post('/create-payment-intent', {price: totalPrice})
        .then(res => {
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret)
        })
    }, [axiosSecure, totalPrice])
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if(card === null){
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
      
          if (error) {
            console.log('[error]', error);
            setError(error.message)
          } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError("");
          }

          const {paymentIntent, error:cardError} = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email,
                    name: user?.firstname
                }
            }
          })

          if(cardError){
            console.log("confirm error");
          }
          else{
            console.log("payment intent", paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                console.log("transaction id", paymentIntent.id);
                setTransactionId(paymentIntent.id)

                const payment= {
                  email: user.email,
                  price: totalPrice,
                  date: new Date(),
                  transactionId: paymentIntent.id,
                  // image: cart.map(item => item.image),
                  // instructorName: cart.map(item => item.instructorName),
                  // classPrice: cart.map(item => item.price),
                  // title: cart.map(item => item.title),
                  cartIds: cart.map(item => item._id),
                  courseTitle: cart.map(item => item.title),
                  instructorName: cart.map(item => item.instructorName),
                  instructoremail: cart.map(item => item.email),
                  image: cart.map(item => item.image),
                  menuItemIds: cart.map(item => item.menuId),
                  status: "Pending"
                }
                const res = await axiosSecure.post('/payments', payment)
                console.log("payment saved", res.data);
                navigate('/userDashboard/paymentHistory')
                
            }
          }

    }
    


    return (
        <div>
            <form onSubmit={handleSubmit}>
            <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="text-gray-200 bg-blue-700 hover:bg-blue-800 transition duration-300 px-3 py-1 mt-4 rounded-md" disabled={!stripe || !clientSecret} type="submit">
        Pay
      </button>
            </form>
            <p className="text-red-600">{error}</p>
            {
                transactionId && <p className="text-green-600">Your transaction id: {transactionId}</p>
            }
        </div>
    );
};

export default CheckoutForm;