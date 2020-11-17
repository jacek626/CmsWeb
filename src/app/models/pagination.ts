
export class Pagination<T> {
  content: T[];
  empty: boolean;
  first: boolean;
  last: boolean;
  numberCurrent: number;
  'number': number;
  pageable: { offset: number; pageNumber: number; pageSize: number; paged: boolean; unpaged: boolean; };
  size: number;
  sort: { empty: boolean; sorted: boolean; unsorted: boolean };
  totalElements: 3;
  totalPages: 1;
}
