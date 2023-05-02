import Image from 'next/image';
import { useContext } from 'react';
import { PlanContext } from '../../context/PlanContext';

const PricingPlan = ({ plan }) => {
  const {
    dispatch,
    state: { planType, selectedPlan },
  } = useContext(PlanContext);

  const activatePlan = (id) => dispatch({ type: 'SELECT_PLAN', payload: id });
  const isActive = selectedPlan === plan.id;

  return (
    <li
      onClick={() => activatePlan(plan.id)}
      className={`flex md:flex-col flex-row cursor-pointer bg-White
         border gap-6  rounded-lg
         items-center 
        px-3 py-4 md:w-[120px] w-full transition-all duration-150 ease-in 
          ${
            isActive
              ? 'border-PurplishBlue bg-Alabaster'
              : 'border-LightGray bg-transparent'
          } hover:border-PurplishBlue `}
    >
      {/* plan icon */}
      <div>
        <Image src={plan.icon} alt={plan.planName} width={40} height={40} />
      </div>

      {/* plan info */}

      <div>
        <h3 className="text-lg text-MarineBlue font-medium">{plan.planName}</h3>
        <p className="text-sm text-CoolGray">
          ${planType === 'monthly' ? `${plan.monthly}/mo` : `${plan.yearly}/yr`}
        </p>

        {planType === 'yearly' && (
          <p className=" text-sm text-MarineBlue">{plan.yearlyDiscount}</p>
        )}
      </div>
    </li>
  );
};

export default PricingPlan;
