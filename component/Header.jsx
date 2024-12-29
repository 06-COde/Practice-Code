import { LOGO_IMG } from "../Utils/constant.js";
import { useState } from "react";

const Header = () =>{
  const [navbutton, setnavbutton ] = useState("Login");



  const [navlog, setnavlog ] = useState("Sign In");
   
   return(
     <div className="navbar">
        <div className="nav-Logo">
           <img src= "https://static.vecteezy.com/system/resources/previews/047/112/083/non_2x/simple-food-logo-free-vector.jpg"/>
        </div>
        <div className="nav-list">
           <ul>
               <li>Home</li>
               <li>About Us</li>
               <li>Cart</li>
               <li onClick={()=>{
                 navlog=== "Sign In" ? setnavlog("Sign Up"): setnavlog("Sign In");
               }}
               >{navlog}</li>

               <button className="Nvbtn" onClick={()=>{
              navbutton ==="Login" ? setnavbutton("logout"): setnavbutton("Login");
               }}>{navbutton}</button>
           </ul>
        </div>
     </div>
   );
 };
export default Header;