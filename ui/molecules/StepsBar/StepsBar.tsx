import React, { FC } from "react";

import StepsBarStyled from "./StepsBarStyled";

const StepsBar: FC<{
  currentStep: number;
  steps: number;
  className?: string;
}> = ({ currentStep, steps, className }) => {
  return (
    <StepsBarStyled
      currentStep={currentStep}
      steps={steps}
      className={className}
    >
      <div className="container-icons">
        <article className="stepOne">
          <div
            className={
              currentStep == 1
                ? "current"
                : currentStep > 1
                ? "completed"
                : "pending"
            }
          >
            {currentStep == 1 ? "1" : currentStep > 1 ? "L" : "1"}
          </div>
        </article>
        <article className="stepTwo">
          <div
            className={
              currentStep == 2
                ? "current-b"
                : currentStep > 2
                ? "completed"
                : "pending"
            }
          >
            {currentStep <= 2 ? "2" : currentStep > 2 ? "L" : "2"}
          </div>
        </article>
        <article className="stepThree">
          <div
            className={
              currentStep == 3
                ? "current-b"
                : currentStep > 3
                ? "completed"
                : "pending"
            }
          >
            {currentStep <= 3 ? "3" : currentStep > 3 ? "L" : "3"}
          </div>
        </article>
        <article className="stepFour">
          <div
            className={
              currentStep == 4
                ? "current-b"
                : currentStep > 4
                ? "completed"
                : "pending"
            }
          >
            4
          </div>
        </article>
      </div>
      <div className="progress-bar">
        <div></div>
      </div>
    </StepsBarStyled>
  );
};

export default StepsBar;
