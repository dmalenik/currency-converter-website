import { FaHeart, FaShieldAlt } from 'react-icons/fa';
import { LuClock4 } from 'react-icons/lu';
import { FaGlobe } from 'react-icons/fa6';

import { type TransferSectionType } from '../types';

export const transferSectionData: TransferSectionType = {
  heading:
    "Our customers made millons of transfers with Western Union last year. Here's why",
  list: [
    {
      id: '0',
      icon: <FaHeart />,
      listHeading: 'Ease and confidence',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velitcum ab repellendus doloribus fugiat mollitia.',
    },
    {
      id: '1',
      icon: <FaShieldAlt />,
      listHeading: 'Commitment to security',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti neque magnam dolores.',
    },
    {
      id: '2',
      icon: <LuClock4 />,
      listHeading: 'Spread and transparency',
      description:
        'Lorem ipsum dolor sit amet consectetur* adipisicing elit. Architecto assumenda totam tempore velit. Pariatur, nisi?',
    },
    {
      id: '3',
      icon: <FaGlobe />,
      listHeading: 'Worldwide reach',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus eligendi odit blanditiis saepe nobis optio vel laborumatque quos autem!',
    },
  ],
};
