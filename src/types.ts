export interface Paper {
  title: string;
  abstract: string;
  publishedDate: string;
  updatedDate: string;
  readerLink: string;
  thumbnail: string;
  authors: { name: string }[];
}
