import React from "react";
import {
  CardsItem,
  CardsItemLink,
  CardsItemPicWrap,
  CardsItemImg,
  CardsItemInfo,
  CardsItemText
} from "./CardsElements";

function CardItem(props) {
  return (
    <>
      <CardsItem>
        <CardsItemLink to={props.path}>
          <CardsItemPicWrap data-category={props.label}>
            <CardsItemImg alt="Travel" src={props.src} />
          </CardsItemPicWrap>
          <CardsItemInfo>
            <CardsItemText>{props.text}</CardsItemText>
          </CardsItemInfo>
        </CardsItemLink>
      </CardsItem>
    </>
  );
}

export default CardItem;
