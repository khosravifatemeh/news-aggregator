export interface RequestParams {
    [key: string]: string | number | boolean;
  }
  
  export interface Adaptor {
    adaptCategories?<T>(params: T): RequestParams;
    adaptAuthors?<T>(params: T): RequestParams;
    adaptSources?<T>(params: T): RequestParams;
    adaptNews?<T>(params: T): RequestParams;
  }