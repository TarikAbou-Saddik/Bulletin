import { FaHackerNews, FaGlobe } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';

export const fetchLogo = (logoName: string | IconType | undefined) => {
  switch (logoName) {
    case 'FaHackerNews':
      return FaHackerNews;
    default:
      return FaGlobe;
  }
};
