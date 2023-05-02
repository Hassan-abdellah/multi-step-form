import { steps } from '../data/constants';
import SingleStep from './SingleStep';

const Sidebar = ({ currentStep }) => {
  return (
    <aside className="md:bg-[url('/images/bg-sidebar-desktop.svg')] bg-[url('/images/bg-sidebar-mobile.svg')]  bg-no-repeat bg-cover bg-center md:rounded-lg rounded-none md:h-full h-[150px] md:w-[270px] w-full p-7">
      <ul className="flex md:flex-col gap-10 flex-row justify-center">
        {steps.map((step) => (
          <SingleStep key={step.id} step={step} currentStep={currentStep} />
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
