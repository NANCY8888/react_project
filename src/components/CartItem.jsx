
//import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className="flex flex-col items-center justify-between 
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline">

      <div>

        <div className="h-[180px]">
          <img src={item.image} className="h-full w-full "/>
        </div>
        <div>
          <h1 className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{item.title}</h1>
          <h1 className="w-40 text-black font-normal text-[10px] text-left">{item.description}</h1>
          <div>
            <p className="text-gray-700 font-semibold">${item.price}</p>
            <button className="text-white border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in bg-orange-950"
            onClick={removeFromCart}> Remove from cart
              {/* <FcDeleteDatabase/> */}
            </button>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
