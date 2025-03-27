export interface ParamSearch<N extends Record<string, any> = any> {
  page: number;
  size: number;
  filter?: string;
  filtered_columns?: string[];
  sort?: `${Extract<keyof Omit<N, keyof ParamSearch<N>>, string>},${'asc' | 'desc'}` | undefined;
}

export interface ResponseSearch <T>{
  content:            T[];
  pageable:           Pageable;
  last:               boolean;
  total_pages:        number;
  total_elements:     number;
  first:              boolean;
  size:               number;
  number:             number;
  sort?:               Sort;
  number_of_elements: number;
  empty:              boolean;
}

export interface Pageable {
  page_number: number;
  page_size:   number;
  sort:        Sort;
  offset:      number;
  paged:       boolean;
  unpaged:     boolean;
}

export interface Sort {
  empty:    boolean;
  sorted:   boolean;
  unsorted: boolean;
}
