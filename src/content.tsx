import {
  FaUserTie,
  FaMicrophone,
  FaHeart,
  FaComments,
  FaShoppingCart,
} from 'react-icons/fa';
import { FaCircleDot } from 'react-icons/fa6';

import { MdFaceRetouchingNatural } from 'react-icons/md';

import { GiComb, GiHealthNormal } from 'react-icons/gi';

export const items = [
  {
    category: 'Facial Aesthetics',
    icon: <MdFaceRetouchingNatural />,
    items: [
      'Chewing Guide',
      'Mewing Guide',
      'Facial Exercises',
      'Jawline Fraud',
      'Eyehooding',
      'Eye Area Max',
      'Collagen Boost',
      'Secret Cream',
      'Derma Roller',
      'Gua Sha',
    ],
  },
  {
    category: 'Hair & Skin',
    icon: <GiComb />,
    items: ['Hairline Guide', 'Hair Growth', 'Glass Skin Guide'],
  },
  {
    category: 'Diet & Fitness',
    icon: <GiHealthNormal />,
    items: [
      'Lose Fat as a Teen',
      'Diet Planning',
      'Protein Guide',
      'Powerful Supplement',
      "Secret Men's Exercise",
    ],
  },
  {
    category: 'Voice & Breathing',
    icon: <FaMicrophone />,
    items: [
      'Voice Max (Larynx)',
      'Voice Max (Tongue)',
      'Voice Max (Jaw)',
      'Breathing Guide',
    ],
  },
  {
    category: 'Style & Social',
    icon: <FaUserTie />,
    items: [
      'Picture Guide',
      'Mainstream Nerd',
      'Social Skills',
      'Looks Obsession',
    ],
  },
  {
    category: 'Lifestyle & Misc',
    icon: <FaShoppingCart />,
    items: ['20-80 Rule', 'Product Guide', 'Must-Buys', 'Supergum'],
  },
  {
    category: 'Sexual Health',
    icon: <FaHeart />,
    items: ['Erectile Dysfunction'],
  },
];
