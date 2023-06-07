import styled from "styled-components";



export const SliderContainer = styled.div`

padding-top: 10px;
padding-left:50px ;
padding-right: 50px;
border: 2px solid red;

/* background-color:black; */

`
export const InsideSliderContainer =styled.div`


border: 2px solid purple;
/* box-sizing: border-box; */

/* max-width: 1200px; */
/* width:100%; */
/* display: flex; */
display:grid;
grid-template-columns: 1fr 1fr;
/* display: inline; */
/* flex-flow:row ; */
/* flex-direction: row; */
/* flex-wrap: wrap; */
/* justify-content: space-around; */



`

export const LeftSliderContainer = styled.div`


     /* width: 50%; */
     width:100%;
    /* max-width :550px ; */
    /* height: 100vh; */
    background-color: green;
    flex-grow: 1;
    flex-basis: 0;
  border: 2px solid yellow;`

//   export const LeftSectionImage =styled.img`

//     /* border:2px solid blue; */
//     width:100%;
//     height:100%;
//     max-width: 500px;
//     object-fit:cover;
    
//     opacity: 0.5;
//     ` 

  export const RightSliderContainer = styled.div`
    
    background-color:gray;
    width:100%;
    flex-grow: 1;
    flex-basis: 0;
    /* color:white;
    width: 50%; */
    /* height: 100vh; */
    /* max-width: 550px; */
    
  /* justify-content: center;
  align-items: center;
  text-align: right; */
  

    
`
// export const RightContainerInnerDiv =styled.div`
// width: 50px;
// height: 50px;
// // background-color: red;
// /* Center vertically and horizontally */
// position: absolute;
// top: 50%;
// left: 50%;
// transform: translate(-50%, -50%);
// `
export const RightContainerButton = styled.button`
    background: black;
    color:white;
   
    margin-top: 2%;
    padding: 14px, 7px;
    height: 40px;
    width: 150px;
    cursor: pointer;
   
    border-color: aliceblue;
`








