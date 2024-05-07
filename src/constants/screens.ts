import { IMG_Onboarding_01, IMG_Onboarding_02, IMG_Onboarding_03 } from '@/assets';

export const listOnboardingContent = [
  {
    id: 1,
    image: IMG_Onboarding_01,
    title: 'Pay bills at the most appropriate time',
    content:
      'Get occasional reminders to pay your bill at the right time and before deadlines. We help you avoid the rush that comes with forgetting to pay a bill by send- ing you reminders according to the importance of the bill.'
  },
  {
    id: 2,
    image: IMG_Onboarding_02,
    title: 'Categorize your bills accordingly',
    content:
      'Create new bills with a due date, automated or customized category, amount, reminder type with an optional note. Archive, delete or snooze bills according to their present states, and categorize bills under one-time or recurrent bill type.'
  },
  {
    id: 3,
    image: IMG_Onboarding_03,
    title: 'Keep track of your\nexpenses',
    content:
      'Get weekly, monthly and yearly reports of your bills and what categories they fall under. Have an overview of what category takes the most portion of your expenses, and an overview of how often you paid bills.'
  }
];

export const TYPE_INPUT = {
  EMAIL: 'email',
  FULL_NAME: 'fullName',
  PASSWORD: 'password',
  PASSWORD_CONFIRMATION: 'passwordConfirmation'
};

export const REGISTER_VALUE_DEFAULT = {
  [TYPE_INPUT.FULL_NAME]: '',
  [TYPE_INPUT.EMAIL]: '',
  [TYPE_INPUT.PASSWORD]: '',
  [TYPE_INPUT.PASSWORD_CONFIRMATION]: ''
};
