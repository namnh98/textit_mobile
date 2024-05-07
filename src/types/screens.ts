import { Optional } from './common';

export type EItemOnboard = {
  id: number;
  image: Optional;
  title: string;
  content: string;
};

export type EOnboardingItem = {
  data: EItemOnboard;
};
