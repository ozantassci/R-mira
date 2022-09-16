import React from "react";
import CardItem from "./cardItem";
import { cardData } from "../../data/data";
import "./card.scss"

const cardContainer = () => {
  return (
    <div className="card-container p-4" >
      {cardData.map((item,index) => {
        
        return <CardItem img = {item.card.image} name={item.card.name} key={index} id={item.id} />
      })}
      
    </div>
  );
};

export default cardContainer;
