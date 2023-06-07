
import React from "react";
import {Header,Logo, MenuBar,List, MenuBarAnker,SocialMedia,SocialMediaList,SocialMediaAnker}from "../Style/NavbarDesign";
import { FaFacebook,FaTwitter,FaLinkedin, FaSearch} from 'react-icons/fa';



function Navbar(){
    return <Header>
        <Logo>
            <h2>PORT<span>O</span></h2>
        </Logo>
        
           <MenuBar>
               <List><MenuBarAnker href="#">About</MenuBarAnker></List>
               <List><MenuBarAnker href="#">Home</MenuBarAnker></List>
               <List><MenuBarAnker href="#">Projects</MenuBarAnker></List>
               <List><MenuBarAnker href="#">Services</MenuBarAnker></List>
               <List><MenuBarAnker href="#">Blog</MenuBarAnker></List>
               <List><MenuBarAnker href="#">Contact</MenuBarAnker></List>
               <List><MenuBarAnker href="#"><FaSearch /></MenuBarAnker></List>

           </MenuBar>
        
        
            <SocialMedia>
                <SocialMediaList><SocialMediaAnker href="#"><FaFacebook /></SocialMediaAnker></SocialMediaList>
                <SocialMediaList><SocialMediaAnker href="#"><FaTwitter /></SocialMediaAnker></SocialMediaList>
                <SocialMediaList><SocialMediaAnker href="#"><FaLinkedin /></SocialMediaAnker></SocialMediaList>
            </SocialMedia>

        
    </Header>
}
   
export default Navbar;