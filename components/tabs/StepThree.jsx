import React, { useState } from 'react';
import { addOns } from '../../data/constants';
import HeadingSubheading from '../utils/HeadingSubheading';
import AddOn from './AddOn';

const StepThree = () => {
  return (
    <div className="flex flex-col gap-8">
      <HeadingSubheading
        heading="Pick add-ons"
        description="Add-ons help enhance your gaming experience."
      />

      {/* Add-ons */}

      <ul className="flex flex-col gap-4">
        {addOns.map((addon) => (
          <AddOn key={addon.id} addon={addon} />
        ))}
      </ul>
    </div>
  );
};

export default StepThree;
