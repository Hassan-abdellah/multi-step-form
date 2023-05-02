import React, { useContext, useState } from 'react';
import { PlanContext } from '../../context/PlanContext';
import HeadingSubheading from '../utils/HeadingSubheading';
import InputGroup from './InputGroup';

const StepOne = () => {
  const { state, dispatch } = useContext(PlanContext);
  console.log(state.user);
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
    dispatch({ type: 'SET_USER', payload: user });
  };

  return (
    <div className="flex flex-col gap-8 md:py-0 py-4">
      <HeadingSubheading
        heading="Personal info"
        description="Please provide your name, email address, and phone number."
      />

      <form className="grid gap-4">
        {/* Name Input and Label */}

        <InputGroup
          label="name"
          id="name"
          type="text"
          placeholder="Stephen King"
          onChange={handleChange}
          user={user}
        />
        {/* Email Input and Label */}

        <InputGroup
          label="email address"
          id="email"
          type="email"
          placeholder="stephenking@lorem.com"
          onChange={handleChange}
          user={user}
        />

        {/* Phone Input and Label */}

        <InputGroup
          label="phone number"
          id="phone"
          type="text"
          placeholder="+1 234 567 890"
          onChange={handleChange}
          user={user}
        />
      </form>
    </div>
  );
};

export default StepOne;
