import { ReactNode } from 'react';

export type TransferSectionType = {
  heading: string;
  action?: string;
  list?: {
    id: string;
    icon?: ReactNode;
    listHeading: string;
    description: string;
  }[];
};
