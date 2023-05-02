import React, { useState } from 'react';
import Sidebar from './Sidebar';
import StepOne from './tabs/StepOne';
import StepTwo from './tabs/StepTwo';
import StepThree from './tabs/StepThree';
import StepFour from './tabs/StepFour';

const FormContainer = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [confirmed, setConfirmed] = useState(false);

  return (
    <section className="md:bg-White bg-transparent rounded-xl md:p-5 p-0 shadow-md flex md:flex-row flex-col md:gap-14 gap-0 md:h-[600px] md:w-[800px] h-auto w-auto ">
      <Sidebar currentStep={currentStep} />

      <div
        className="flex flex-col justify-between pb-5 md:rounded-none rounded-lg md:bg-transparent bg-White md:shadow-none shadow-md 
      
      md:pt-0 pt-4 md:mt-0 mt-[-40px] md:mx-0  mx-2 px-4 md:px-0"
      >
        {/* outputing the Four Forms conditinally */}
        {(() => {
          switch (currentStep) {
            case 1:
              return <StepOne />;
            case 2:
              return <StepTwo />;
            case 3:
              return <StepThree />;
            case 4:
              return (
                <StepFour
                  confirmed={confirmed}
                  setCurrentStep={setCurrentStep}
                />
              );
            default:
              return null;
          }
        })()}
        {/* buttons */}

        {!confirmed && (
          <div className="flex items-center justify-between w-full md:bg-transparent md:static absolute bg-White  bottom-0 left-0 md:py-0 md:px-0 py-4 px-2">
            <button
              className={`${buttonBaseClasses} ${transparentButton} ${
                currentStep > 1 ? 'opacity-1' : 'opacity-0 pointer-events-none'
              } `}
              onClick={() => setCurrentStep((prevStep) => prevStep - 1)}
            >
              Go Back
            </button>
            {currentStep < 4 ? (
              <button
                className={`${buttonBaseClasses} ${solidtButton} ${darkBlueButton} `}
                onClick={() => setCurrentStep((prevStep) => prevStep + 1)}
              >
                Next Step
              </button>
            ) : (
              <button
                className={`${buttonBaseClasses} ${solidtButton} ${purplishBlueButton}  `}
                onClick={() => setConfirmed(true)}
              >
                Confirm
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default FormContainer;

const buttonBaseClasses =
  'rounded-md px-6 py-3 transition-colors duration-150 ease-in-out';

const transparentButton = 'text-CoolGray font-semibold hover:text-MarineBlue';
const solidtButton = 'text-White font-medium';

const darkBlueButton = 'bg-MarineBlue hover:bg-LightBlue';
const purplishBlueButton = 'bg-PurplishBlue hover:bg-PastelBlue';
