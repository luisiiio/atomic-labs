import React from "react";
import HeaderStyled from "./HeaderStyled";
import Image from "next/image";
import logo from "public/logo.png";

const Header = () => {
  return (
    <HeaderStyled>
      <Image src={logo} alt="Picture of the author" height={90} />
    </HeaderStyled>
  );
};

export default Header;
