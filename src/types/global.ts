export type Meta = {
  page_size: number;
  current_page: number;
  total: number;
  total_page: number;
};

export type SwaggerMetaResponse = {
  status_code: number;
  status_description: string;
};

export type DataOnlyRes<T> = {
  data: T;
};

export type DataWithStatusRes<T> = DataOnlyRes<T> & {
  status_description: string;
};

export type DataWithMetaRes<T> = DataOnlyRes<T> & {
  meta: Meta;
};

export type StatusDataMetaRes<T> = DataWithMetaRes<T> & DataWithStatusRes<T>;
