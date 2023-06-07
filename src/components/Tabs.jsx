import React from "react";
import { CardContainer,CardImage,Cardtitle,CardDescription } from "../Style/TabStyle";

function Tabs(props){
    return(<CardContainer>
        <CardImage src={props.CardImage} />
        <Cardtitle>{props.Cardtitle}</Cardtitle>
        <CardDescription>{props.CardDescription}</CardDescription>
    </CardContainer>);

}

export default Tabs;
