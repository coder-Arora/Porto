import React from "react";
import {MenuBar,List, MenuBarAnker,SubList,SubUnList,SubListAnker,ServiceContainer}from "../Style/MenubarStyle";
import {FaSearch} from 'react-icons/fa';
function MenuList(){
    return  <MenuBar>
        <List><MenuBarAnker href="#">About</MenuBarAnker></List>
        <List><MenuBarAnker href="#">Home</MenuBarAnker></List>
        <List><MenuBarAnker href="#">Projects</MenuBarAnker></List>
        <ServiceContainer>

        <List>
        <MenuBarAnker href="#">Services <i class="fa fa-caret-down"></i>  </MenuBarAnker>
        </List>
       
         <SubUnList>
             <SubList><SubListAnker href="#">View All
             </SubListAnker></SubList>
             <SubList><SubListAnker href="#">Interior Design
             </SubListAnker></SubList>
             <SubList><SubListAnker href="#">exterior Design
             </SubListAnker></SubList>
             <SubList><SubListAnker href="#">Construction Drawing
             </SubListAnker></SubList>
             <SubList><SubListAnker href="#">Design & Planning
             </SubListAnker></SubList>
         </SubUnList>
        
       
        
        </ServiceContainer>

       

        <List><MenuBarAnker href="#">Blog</MenuBarAnker></List>
        <List><MenuBarAnker href="#">Contact</MenuBarAnker></List>
        
        
        <List><MenuBarAnker href="#"><FaSearch /></MenuBarAnker></List>

    </MenuBar>
 
}
export default MenuList;
