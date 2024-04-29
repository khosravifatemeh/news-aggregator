export interface MapperConfig<T, U> {
    fieldMapping: { [key in keyof T]: keyof U } & { [key: string]: any }; 
}
export interface NewsMapper<T, U> {
  map(item: T): U;
}
export class GenericeNewsMapper<T, U> implements NewsMapper<T, U> {
  private config: MapperConfig<T, U>;

  constructor(config: MapperConfig<T, U>) {
    this.config = config;
  }

  map(item: T): U {
    const result = {} as U;
    for (const [fromField, toField] of Object.entries(
      this.config.fieldMapping
    )) {
      result[toField] = item[fromField];
    }
    return result;
  }
}
export interface NewsMapperFactory {
  createMapper<T, U>(newsSource: string): NewsMapper<T, U>;
}
