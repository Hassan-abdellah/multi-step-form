import Image from 'next/image';
import React from 'react';
import HeadingSubheading from '../utils/HeadingSubheading';

const ThankYou = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 h-full md:py-0 py-5">
      <Image
        src="/images/icon-thank-you.svg"
        alt="thank you"
        width={80}
        height={80}
      />
      <HeadingSubheading
        heading="Thank you!"
        lastTab={true}
        description="Thanks for confirming your subscription! We hope you have fun using our platfrom. If you ever need support, Please feel free to email us at support@loremgaming.com."
      />
    </div>
  );
};

export default ThankYou;
