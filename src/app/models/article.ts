export interface Article {
  id: number;
  title: string;
  content: string;
  creationDate: string;
  userId: number;
  categoryId: number;
  ratingsNegative: number;
  ratingsPositive: number;
}
