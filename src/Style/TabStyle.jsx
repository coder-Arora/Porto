import styled from "styled-components";


export const CardContainer = styled.div`
/* max-width:300px; */
/* overflow:hidden; */
/* border: 2px solid purple; */
min-width: 300px;
min-height: 200px;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
background-color: white;
 
  padding: 2px 16px;
  /* margin: 10px 10px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover{
    cursor: pointer;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
     transition: 0.3s;

  }
 
  


`



export const CardImage =styled.img`
/* border:2px solid red; */
max-width: 50px;
max-height: 50px;
margin: 10%;
`

export const Cardtitle = styled.div`
/* border:2px solid green; */
font-family:'Oswald', sans-serif;`

export const CardDescription = styled.div`
/* border:2px solid yellow; */

font-family: 'Dosis', sans-serif;
justify-content:center;
text-align:center;`