import React from "react";
import Image from "next/image";
import ModalStyled from "./ModalStyled";

const Modal: React.FC<{ icon: StaticImageData; message: string }> = ({
  icon,
  message,
}) => {
  return (
    <ModalStyled>
      <article>
        <Image src={icon} alt="step image" layout="responsive" />
      </article>
      <p>{message}</p>
    </ModalStyled>
  );
};

export default Modal;
