import { IconType } from 'react-icons';

export interface IBlogLogo {
  iconSrc: IconType | string;
  title: string;
  color: string;
}

export interface IBlogPost {
  title: string;
  author: string;
  rawPostedDate: Date;
  formattedPostedDate: string;
  points: Number;
  link: string;
}

export interface IBlogApiResponse {
  name: string;
  category: string;
  description: string;
  logo: IBlogLogo;
  posts: IBlogPost[];
}
