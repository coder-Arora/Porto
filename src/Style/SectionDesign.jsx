import styled from "styled-components";



export const SliderContainer = styled.div`
/* position: absolute; */
padding-top: 30px;
padding-left:80px ;
padding-right: 80px;
border: 2px solid ridge;

background-color:#242424;
/* z-index: 2; */
/* background-size: 100px; */

`
export const InsideSliderContainer =styled.div`


/* border: 2px solid purple; */
/* box-sizing: border-box; */
/* background-color: black; */
/* max-width: 1200px; */
/* width:100%; */
/* display: flex; */
display:grid !important;
grid-template-columns: 1fr 1fr;
/* min-height: 500px; */
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
    /* background-color: green; */
   
  /* border: 2px solid yellow; */
  `

  export const LeftSectionImage =styled.img`

    /* border:2px solid blue; */
    width:100%;
    height:100%;
    /* max-width: 500px; */
    object-fit:cover;
    filter: grayscale(90%);
  
    
    
    opacity: 0.9;
    /* color: #808080; */
    ` 

  export const RightSliderContainer = styled.div`
    
    background-color:gray;
    width:100%;
    
    /* color:white;
    width: 50%; */
    /* height: 100vh; */
    /* max-width: 550px; */
    display: flex;
    flex-direction: column;

  /* justify-content: center; */
  align-items:center;

  padding-top: 140px;
  /* text-align: right; */
  

    
`
export const RightSliderInner = styled.div`
/* border:2px solid; */
text-align: right;
padding :20px`
export const Heading =styled.h1`
color:white;
font-size:50px;`
export const RightSubHead = styled.p`
color:white;
font-family: 'Source Code Pro', monospace;
`
export const RightSubHeadSecond = styled.p`
color:white;
/* font-family: sans-serif; */


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
   
    /* margin-top: 2%; */
    /* padding: 25px;
    height: 40px;
    width: 150px;
    cursor: pointer;
    border:2px solid black; */
    background: black;
    color:whitesmoke;
    border-radius: 10px;
    position: relative;
    top:25px;
    /* margin-top: 2%; */
    padding: 14px, 7px;
    height: 40px;
    width: 150px;
    cursor: pointer;
    /* margin-left: 220px; */
    border-color: aliceblue;
   
    /* border-color: aliceblue; */
`

/* export const ButtonContainer = styled.button`
border:2px solid black;
padding:auto;` */


export const CardContainer = styled.div`
border: 2px solid red;

display:block;`





