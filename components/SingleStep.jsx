const SingleStep = ({ step, currentStep }) => {
  return (
    <li className="flex items-center gap-4">
      {/* step number */}
      <div
        className={` " w-9 h-9 rounded-full border grid place-content-center font-bold" ${
          currentStep === step.id
            ? 'bg-LightBlue text-MarineBlue border-LightBlue'
            : 'text-White border-White'
        }`}
      >
        {step.id}
      </div>

      {/* step name */}

      <div className="md:grid hidden uppercase">
        <span className="text-CoolGray text-sm">Step {step.id}</span>
        <h3 className="text-White text-md font-semibold">{step.stepName}</h3>
      </div>
    </li>
  );
};

export default SingleStep;
