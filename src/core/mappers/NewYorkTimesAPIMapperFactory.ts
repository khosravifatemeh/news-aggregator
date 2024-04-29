import {
    NewsMapper,
    MapperConfig,
    NewsMapperFactory,
    GenericeNewsMapper,
  } from "./common/Mapper";
  export class NewYorkTimesAPIMapperFactoryImpl implements NewsMapperFactory {
    createMapper<T, U>(newsSource: string): NewsMapper<T, U> {
      const config: MapperConfig<T, U> = { fieldMapping: {} };
  
      switch (newsSource) {
        case "category":
          config.fieldMapping = {  name: "name" };
          break;
        case "author":
          config.fieldMapping = {  name: "name" };
          break;
        case "source":
          config.fieldMapping = {  name: "name" };
          break;
        case "news":
          config.fieldMapping = {
            id: "id",
            name: "headline.main",
            url: "web_url",
            pub_date: "publishedAt",
            author: "author",
          };
          break;
  
        default:
          throw new Error("Unsupported news source");
      }
  
      return new GenericeNewsMapper<T, U>(config);
    }
  }
  