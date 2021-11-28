import React from "react";
import Link from "next/link";
import HeaderStyled from "./HeaderStyled";
import Image from "next/image";
import logo from "public/logo.png";

const Header = () => {
  return (
    <HeaderStyled>
      <article>
        <Link href="/">
          <Image src={logo} alt="Picture of the author" height={90} />
        </Link>
      </article>
    </HeaderStyled>
  );
};

export default Header;
