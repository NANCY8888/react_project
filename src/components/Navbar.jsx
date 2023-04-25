import PersonIcon from '@mui/icons-material/Person';
import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import "./Navbar.css"

const Navbar = () => {

  const {cart} = useSelector((state) => state);

  return (
    <div >
      <nav className="navbar flex justify-between items-center h-20  mx-auto ">

        
          <div className="flex items-center font-small text-slate-100 ml-1 mr-5 space-x-6">
          <img src="../logo.avif" className="h-14"/>
          <NavLink to="/">
              <p>Home</p>
            </NavLink>
            <NavLink to="/about">
              <p>AboutUs</p>
            </NavLink>
            <NavLink to="/contact">
              <p>Contact</p>
            </NavLink>
          </div>
      
          <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          

            <NavLink to="/cart">
              <div className="relative">
                  <FaShoppingCart className="text-2xl"/>
                  {
                    cart.length > 0 &&
                    <span
                    className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white" 
                    >{cart.length}</span>
                  }
                  
              </div>
            </NavLink>
            <NavLink to="/user">
              <div className="relative">
                  <PersonIcon className="text-2xl"/>
                  
              </div>
            </NavLink>
            
          </div>
      </nav>
    </div>
  )
};

export default Navbar;
