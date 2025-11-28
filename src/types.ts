export type IComment = {
  user: string;
  comment: string;
  time: Date;
};

export interface IBlog {
  title: string;
  slug: string;
  date: string | Date;
  description: string;
  content: string;
  image: string;
  image_alt: string;
  comments: IComment[];
}
