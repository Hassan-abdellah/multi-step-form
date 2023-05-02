import React, { useContext } from 'react';
import { PlanContext } from '../../context/PlanContext';
import HeadingSubheading from '../utils/HeadingSubheading';

import { plans, addOns } from '../../data/constants';
import ThankYou from './ThankYou';
const StepFour = ({ confirmed, setCurrentStep }) => {
  const {
    state: { planType, selectedPlan, addOns: selectedAddOns },
  } = useContext(PlanContext);

  const userPlan = plans.find((plan) => {
    return plan.id === selectedPlan;
  });

  let userAddons = [];

  addOns.forEach((addOn) => {
    selectedAddOns.forEach((selectedAddOn) => {
      if (addOn.id === selectedAddOn) userAddons.push(addOn);
    });
  });

  let totalPerMonth = 0;
  let totalPerYear = 0;

  if (userAddons.length === 0) {
    totalPerMonth = userPlan.monthly;
    totalPerYear = userPlan.yearly;
  } else if (userAddons.length === 1) {
    totalPerMonth = userAddons[0].monthly + userPlan.monthly;
    totalPerYear = userAddons[0].yearly + userPlan.yearly;
  } else {
    totalPerMonth =
      userAddons.reduce((total, num) => total + num.monthly, totalPerMonth) +
      userPlan.monthly;
    totalPerYear =
      userAddons.reduce((total, num) => total + num.yearly, totalPerYear) +
      userPlan.yearly;
  }

  if (confirmed) return <ThankYou />;
  return (
    <div className="flex flex-col gap-8">
      <HeadingSubheading
        heading="Finishing up"
        description="Double-check everything looks OK before confirming."
      />

      {/* invoice */}

      <div className="flex flex-col bg-Alabaster rounded-md py-5 px-4 ">
        {/* invoice head */}

        <div className="flex items-center justify-between border-b pb-5 border-LightGray">
          {/* plan Name */}
          <div>
            <h3 className="capitalize font-semibold text-MarineBlue">
              {userPlan.planName} ({planType})
            </h3>

            <button
              className={`${buttonBaseClasses}`}
              onClick={() => setCurrentStep(2)}
            >
              Change
            </button>
          </div>

          {/* paln price */}

          <span className="font-bold text-MarineBlue">
            $
            {planType === 'monthly'
              ? `${userPlan.monthly}/mo`
              : `${userPlan.yearly}/yr`}
          </span>
        </div>

        {/* invoice body */}

        <ul className="flex flex-col gap-6 py-4">
          {userAddons.map((userAddon) => (
            <li
              key={userAddon.id}
              className="flex items-center justify-between"
            >
              <h4 className="text-CoolGray capitalize">{userAddon.name}</h4>
              <span className="text-MarineBlue font-medium">
                +$
                {planType === 'monthly'
                  ? `${userAddon.monthly}/mo`
                  : `${userAddon.yearly}/yr`}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* total */}

      <div className="flex items-center justify-between px-4">
        <span className="text-CoolGray ">
          Total (per {planType === 'monthly' ? 'month' : 'year'})
        </span>
        <span className="font-semibold text-PurplishBlue">
          +$
          {planType === 'monthly'
            ? totalPerMonth + '/mo'
            : totalPerYear + '/yr'}
        </span>
      </div>
    </div>
  );
};

export default StepFour;

const buttonBaseClasses =
  'text-CoolGray font-medium hover:text-PurplishBlue underline transition-colors duration-150 ease-in-out';
