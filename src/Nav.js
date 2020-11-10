import React,{useEffect,useState} from "react";
import "./NavStyle.css";
import AvtarLogo from "./avtarLogo.png";

const Nav = () => {

    const [show,handleShow] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY > 100){
                handleShow(true);
            }
            else{
                handleShow(false);
            }
        })

        return ()=>{
            window.removeEventListener('scroll');
        }
    },[])
  return (
    <div className={`navbarSection ${show && 'nav_black'}`}>
      <img
        src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
        alt="Netflix Logo"
        className="logo"
      />
      <img src={AvtarLogo} alt="Hello User" className="avtar" />
    </div>
  );
};

export default Nav;
