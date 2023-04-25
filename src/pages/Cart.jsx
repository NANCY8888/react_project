import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import './Cart.css';



const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div className="a bg-green-600">
    <div className="">
  {
    cart.length > 0  ? 
    (<div>


      <div className="">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div>

        <div>
          <br/>

          <div>Your Cart</div>
          <div>Summary</div>
          <p>
            <span>Total Items: {cart.length}</span>
          </p>
        </div>

        <div>
          <p>Total Amount: ${totalAmount}</p>
          <button className="b">
            CheckOut Now
          </button>
          <br/>
          <br/>
        </div>

      </div>


    </div>) : 
    (<div>
      <h1 className="word">Cart Empty</h1>
      <Link to={"/"}>
        <button className="b">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
    </div>
  );
};

export default Cart;
