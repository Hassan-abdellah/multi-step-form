import Image from 'next/image';
import React, { useContext } from 'react';
import { PlanContext } from '../../context/PlanContext';

const AddOn = ({ addon }) => {
  const {
    dispatch,
    state: { planType, addOns },
  } = useContext(PlanContext);

  const activatePlan = (id) => {
    const isThere = addOns.find((addOn) => {
      return addOn === id;
    });
    if (!isThere) {
      dispatch({ type: 'SELECT_ADDONS', payload: [...addOns, id] });
    } else {
      const filteredAddOns = addOns.filter((addOn) => addOn !== id);
      dispatch({ type: 'SELECT_ADDONS', payload: filteredAddOns });
    }
  };

  const isActive = addOns.find((addOn) => {
    return addOn === addon.id;
  });

  // console.log(addOns);
  return (
    <li
      onClick={() => activatePlan(addon.id)}
      className={`flex items-center  cursor-pointer bg-White
     border gap-6  rounded-lg
     md:w-[400px]
      w-auto
    px-5 py-5 transition-all duration-150 ease-in
    ${
      isActive
        ? 'border-PurplishBlue bg-Alabaster'
        : 'border-LightGray bg-transparent'
    } 
      hover:border-PurplishBlue `}
    >
      {/* add on checkbox */}
      <div
        className={`w-[20px] h-[20px] rounded-md border border-LightGray flex items-center justify-center ${
          isActive
            ? 'border-PurplishBlue bg-PurplishBlue'
            : 'border-LightGray bg-transparent'
        } `}
      >
        {isActive && (
          <Image
            src="/images/icon-checkmark.svg"
            alt="white checkmark"
            width={12}
            height={9}
          />
        )}
      </div>

      {/* addon info */}

      <div className="flex-1">
        <h3 className="text-md text-MarineBlue font-medium capitalize">
          {addon.name}
        </h3>
        <p className="text-CoolGray md:text-sm text-xs ">{addon.description}</p>
      </div>

      <p className="text-sm text-PurplishBlue">
        +$
        {planType === 'monthly' ? `${addon.monthly}/mo` : `${addon.yearly}/yr`}
      </p>
    </li>
  );
};

export default AddOn;
