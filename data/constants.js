export const steps = [
  { id: 1, stepName: 'your info' },
  { id: 2, stepName: 'select plan' },
  { id: 3, stepName: 'add-ons' },
  { id: 4, stepName: 'summary' },
];

export const plans = [
  {
    id: 1,
    planName: 'Arcade',
    icon: '/images/icon-arcade.svg',
    monthly: 9,
    yearly: 90,
    yearlyDiscount: '2 months free',
  },
  {
    id: 2,
    planName: 'Advanced',
    icon: '/images/icon-advanced.svg',
    monthly: 12,
    yearly: 120,
    yearlyDiscount: '2 months free',
  },
  {
    id: 3,
    planName: 'Pro',
    icon: '/images/icon-pro.svg',
    monthly: 15,
    yearly: 150,
    yearlyDiscount: '2 months free',
  },
];

export const addOns = [
  {
    id: 1,
    name: 'online service',
    description: 'Access to multiplayer games',
    monthly: 1,
    yearly: 10,
  },
  {
    id: 2,
    name: 'larger storage',
    description: 'Extra 1TB of cloud save',
    monthly: 2,
    yearly: 20,
  },
  {
    id: 3,
    name: 'customizable profile',
    description: 'Custom theme on your Profile',
    monthly: 2,
    yearly: 20,
  },
];

// animation
export const tabVariant = {
  hidden: { opacit: 0 },
  visible: { opacit: 1 },
};
