import styled from "styled-components";
export const MenuBar = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 2px solid white; */
   @media(max-width:768px){ 
    
  flex-direction: column;
  display: ${props => (props.isMenuOpen ? 'flex' : 'none')};
 
  
  
  
    
  } 

`

export const SubUnList = styled.div`
width:100%;
min-width: 200px;
display: flex;
flex-direction: column;
justify-content: center;
background-color: #242424;
align-items: center;
display: none;
position:absolute;
top:58px;
left:-1px;
z-index:1;
color: black;
box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
/* border: 1px solid yellow; */
@media(max-width:768px)
{
  /* min-height: auto; */
  
}
`
export const MenuBarAnker = styled.a`
  color: white;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  @media(max-width:768px){
  &:hover{
    color: black;
  }
}

`
export const List = styled.li`
  padding: 15px;
  list-style: none;
  &:hover{
    font-size:20px;
    transition: all ease-in-out;
    text-decoration: underline;  
    
  }
    
@media (max-width:768px){
  
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 2px solid green; */
   &:last-child{
    display: none;
  } 
  &:hover{
    width: 100%;
    background-color: aliceblue; 
    color: #000000;
  }
}
  
`
export const SubListAnker =styled.a`
color:white;
text-decoration: none;
max-height: 500px;
&:hover{
  color: black;
  font-size: larger;
}
`
export const SubList = styled.li`
list-style: none;
padding: 12px 16px;
&:hover {
  background-color: whitesmoke;
  
}
&:hover ${SubListAnker}{
  color: black;
  font-size: larger;

}


`
export const ServiceContainer = styled.div`
/* border:2px solid red ; */
  position: relative;
  display: inline-block;
  &:hover ${SubUnList}{
    display: block;
  }
  @media(max-width:768px){
   
  }

 
  `



