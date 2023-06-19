import styled from "styled-components";

export const Header = styled.nav`
  display: flex;
  height: 100%;
  min-height: 70px;
  background-color: #242424;
  color: aliceblue;
  /* border: 2px solid greenyellow; */

  @media (max-width:768px){
    flex-direction: column;
    }
`;

export const Logo = styled.div`
  
  align-self: center;
  padding-left:20px ;
  /* border: 2px solid white; */

  @media (max-width:768px){
    width: 100%;
    display: flex;
    justify-content: space-between;
  }  
`
export const Porto =styled.h1`
/* border:2px solid white; */
@media (max-width:768px) {
  
}`

export const Hamburger =styled.div`
display: none;

@media (max-width:768px){
  display: block;
  padding-top: 5px;
  padding-right: 20px;
  color: whitesmoke;
background-color: #242424;
box-shadow: none;

}
`


export const SocialMedia = styled.div`
  display: flex;
  align-self: center;
  /* border: 2px solid white; */
  padding-right:20px ;
  @media(max-width:768px){
    display: none;
  }


`

export const SocialMediaList = styled.li`
  padding: 10px;
  list-style: none;
`



export const SocialMediaAnker = styled.a`
  color: aliceblue;
`




  





