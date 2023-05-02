import { createContext, useReducer } from 'react';

export const PlanContext = createContext(null);

const INITIAL_STATE = {
  planType: 'monthly',
  addOns: [],
  selectedPlan: 1,
  user: {
    name: '',
    email: '',
    phone: '',
  },
};

const planReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_PLAN_TYPE':
      return {
        ...state,
        planType: state.planType === 'monthly' ? 'yearly' : 'monthly',
      };
    case 'SELECT_PLAN':
      return { ...state, selectedPlan: action.payload };
    case 'SELECT_ADDONS':
      return { ...state, addOns: action.payload };

    case 'SET_USER':
      return { ...state, user: action.payload };

    default:
      return state;
  }
};
export const PlanContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(planReducer, INITIAL_STATE);

  return (
    <PlanContext.Provider value={{ state, dispatch }}>
      {children}
    </PlanContext.Provider>
  );
};
