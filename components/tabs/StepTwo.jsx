import React, { useContext } from 'react';
import { plans, tabVariant } from '../../data/constants';
import HeadingSubheading from '../utils/HeadingSubheading';
import PricingPlan from './PricingPlan';
import { motion } from 'framer-motion';
import { PlanContext } from '../../context/PlanContext';
const StepTwo = () => {
  const {
    dispatch,
    state: { planType },
  } = useContext(PlanContext);

  return (
    <motion.div
      className="flex flex-col gap-8"
      initial="hidden"
      animate="visible"
      variants={tabVariant}
      transition={{ duration: '0.75', ease: 'easeIn' }}
    >
      <HeadingSubheading
        heading="Select your plan"
        description="You have the option of monthly or yearly billing."
      />

      {/* plans */}

      <ul className="grid md:grid-cols-3 grid-cols-1 gap-4">
        {plans.map((plan) => (
          <PricingPlan key={plan.id} plan={plan} />
        ))}
      </ul>

      {/* plan type */}

      <div className="bg-Alabaster rounded-md flex items-center justify-center gap-2 py-4 mt-2">
        <span
          className={`${
            planType === 'monthly' ? 'text-MarineBlue' : 'text-CoolGray'
          } `}
        >
          Montly
        </span>

        <div
          className="bg-MarineBlue rounded-2xl cursor-pointer w-[35px] py-1"
          onClick={() => dispatch({ type: 'TOGGLE_PLAN_TYPE' })}
        >
          <div
            className={`w-[12px] h-[12px] rounded-full bg-White  transition-transform duration-200 ${
              planType === 'yearly' ? 'translate-x-[150%]' : 'translate-x-[4px]'
            }`}
          />
        </div>
        <span
          className={`${
            planType === 'yearly' ? 'text-MarineBlue' : 'text-CoolGray'
          } `}
        >
          Yealry
        </span>
      </div>
    </motion.div>
  );
};

export default StepTwo;
