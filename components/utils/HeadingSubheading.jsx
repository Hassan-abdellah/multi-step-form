import React from 'react';

const HeadingSubheading = ({ heading, description, lastTab }) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className={`${headingBaseClasses} ${lastTab && 'text-center pt-0'} `}>
        {heading}
      </h2>
      <p
        className={`${paragraphBaseClasses} ${
          lastTab && 'text-center leading-relaxed mt-2 max-w-sm'
        }`}
      >
        {description}
      </p>
    </div>
  );
};

export default HeadingSubheading;

const headingBaseClasses = 'pt-5 pb-0 text-3xl font-bold text-MarineBlue';
const paragraphBaseClasses = 'text-CoolGray text-sm';
