import React, { useState, MouseEvent } from "react";
import Image from "next/image";

import ApplicationStyled from "./ApplicationStyled";

import Button from "ui/atoms/Button";
import { Input } from "ui/atoms/Input";
import { StepsBar } from "ui/molecules/StepsBar";

import oneactive from "public/oneactive.png";
import twoactive from "public/twoactiveorange.png";
import threeactive from "public/threeactiveorange.png";
import fouractive from "public/fouractiveorange.png";
import stepOne from "public/stepOne.png";

const iconSteps: {
  1: StaticImageData;
  2: StaticImageData;
  3: StaticImageData;
  4: StaticImageData;
} = {
  1: oneactive,
  2: twoactive,
  3: threeactive,
  4: fouractive,
};

const Application = () => {
  const [currentStep, seCurrentStep] = useState(1);
  const [data, setData] = useState({ name: "", lastName: "", phone: "" });
  const [errors, setErrors] = useState({ name: "", lastName: "", phone: "" });

  const handleChangeInput = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    setData({ ...data, [event.currentTarget.name]: event.currentTarget.value });
  };

  const handleBlurInput = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (["name", "lastName"].includes(event.currentTarget.name)) {
      if (event.currentTarget.value.length < 5) {
        setErrors({
          ...errors,
          [event.currentTarget.name]:
            "Este campo deberá tener mínimo 5 caracteres",
        });
      } else {
        setErrors({
          ...errors,
          [event.currentTarget.name]: "",
        });
      }
    }
    if (event.currentTarget.name === "phone") {
      if (event.currentTarget.value.length !== 10) {
        setErrors({
          ...errors,
          [event.currentTarget.name]: "Este campo deberá tener solo 10 dígitos",
        });
      } else {
        setErrors({
          ...errors,
          [event.currentTarget.name]: "",
        });
      }
    }
  };

  const nextStep = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    seCurrentStep(currentStep + 1);
  };
  const prevStep = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    seCurrentStep(currentStep - 1);
  };
  return (
    <ApplicationStyled>
      <section>
        <StepsBar currentStep={currentStep} steps={4} className="step-bar" />

        <p
          className={currentStep === 1 ? "hide" : "btn-back"}
          onClick={prevStep}
        >
          {"< Regresar"}
        </p>
        <div className="title">
          <span className="img">
            <Image
              src={iconSteps[currentStep]}
              alt="step number"
              height={50}
              width={50}
            />
          </span>{" "}
          <h1 className={currentStep === 1 ? "" : "hide"}>
            TE QUEREMOS <span>CONOCER</span>
          </h1>
          <h1 className={currentStep === 2 ? "" : "hide"}>
            VALIDA TU <span>CELULAR</span>
          </h1>
          <h1 className={currentStep === 3 ? "" : "hide"}>
            CÓDIGO DE <span>VERIFICACIÓN</span>
          </h1>
          <h1 className={currentStep === 4 ? "" : "hide"}>
            TÉRMINOS Y <span>CONDICIONES</span>
          </h1>
        </div>
        <h2 className={currentStep === 1 ? "subtitle" : "hide"}>
          Queremos saber que eres tú, por favor ingresa los siguientes datos:
        </h2>
        <h2 className={currentStep === 2 ? "subtitle" : "hide"}>
          Necesitamos validar tu número para continuar <br />
          Ingresa tu número a 10 dígitos y te enviaremos un código SMS.
        </h2>

        <form className={currentStep === 1 ? "form" : "hide"}>
          <div>
            <Input
              name="name"
              label="Nombre(s)"
              type="text"
              value={data.name}
              onChangeInput={handleChangeInput}
              onBlurInput={handleBlurInput}
              errors={errors.name}
            />
            <Input
              name="lastName"
              label="Apellidos"
              type="text"
              value={data.lastName}
              onChangeInput={handleChangeInput}
              onBlurInput={handleBlurInput}
              errors={errors.lastName}
            />
          </div>
          <Button
            primary
            disabled={data.name.length <= 5 || data.lastName.length <= 5}
            onClick={nextStep}
          >
            Enviar
          </Button>
        </form>
        <form className={currentStep === 2 ? "form" : "hide"}>
          <div>
            <Input
              name="phone"
              label="Número de Celular"
              type="number"
              value={data.phone}
              onChangeInput={handleChangeInput}
              onBlurInput={handleBlurInput}
              errors={errors.phone}
            />
          </div>
          <Button
            primary
            disabled={data.phone.length !== 10}
            onClick={nextStep}
          >
            Continuar
          </Button>
        </form>
      </section>
      <article className="step-img">
        <Image src={stepOne} alt="step one" layout="responsive" />
      </article>
    </ApplicationStyled>
  );
};

export default Application;
