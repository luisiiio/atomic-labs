import React, { FC, ReactNode } from "react";
import CardsStyled from "./CardsStyled";

const Cards: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return <CardsStyled>{children}</CardsStyled>;
};

export default Cards;
