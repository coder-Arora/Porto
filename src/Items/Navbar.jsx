
import React, {useState} from "react";
import { FaBars, FaTimes } from 'react-icons/fa';

import MenuList from "../Components/MenuList";
import {Header,Logo,SocialMedia,SocialMediaList,SocialMediaAnker,Porto,Hamburger} from "../Style/NavbarDesign";
import { FaFacebook,FaTwitter,FaLinkedin} from 'react-icons/fa';




function Navbar(){

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };


    return <Header>
        <Logo>
            <Porto>PORTʘ</Porto>
            <Hamburger >{isMenuOpen ? (
        <FaTimes onClick={toggleMenu} />
      ) : (
        <FaBars onClick={toggleMenu} />
      )}</Hamburger>
            
        </Logo>
        <MenuList  isMenuOpen={isMenuOpen}/>
        
        
          
        
            <SocialMedia>
                <SocialMediaList><SocialMediaAnker href="#"><FaFacebook /></SocialMediaAnker></SocialMediaList>
                <SocialMediaList><SocialMediaAnker href="#"><FaTwitter /></SocialMediaAnker></SocialMediaList>
                <SocialMediaList><SocialMediaAnker href="#"><FaLinkedin /></SocialMediaAnker></SocialMediaList>
            </SocialMedia>
            

        
    </Header>

}
   
export default Navbar;