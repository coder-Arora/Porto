import styled from "styled-components";

export const Header = styled.nav`
  display: flex;
  /* flex-wrap: wrap; */
  flex-flow: row;
  height: 100%;
  max-height: 50px;
  
  background-color: black;
  color: aliceblue;
  
  /* border: 2px solid greenyellow; */
`;

export const Logo = styled.div`
  
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  /* border: 2px solid white; */

  
`

export const MenuBar = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  /* border: 2px solid white; */
`

export const List = styled.li`
  padding: 15px;
  list-style: none;
`

export const MenuBarAnker = styled.a`
  color: white;
  text-decoration: none;
`

export const SocialMedia = styled.div`
  display: flex;
  
  /* border: 2px solid white; */
  align-items: center;
  justify-content: center;

`

export const SocialMediaList = styled.li`
  padding: 10px;
  list-style: none;
`



export const SocialMediaAnker = styled.a`
  color: aliceblue;
`


