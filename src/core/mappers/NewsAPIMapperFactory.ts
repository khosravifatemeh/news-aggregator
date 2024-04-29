import {
    NewsMapper,
    MapperConfig,
    NewsMapperFactory,
    GenericeNewsMapper,
  } from "./common/Mapper";
  export class NewsAPIMapperFactoryImpl implements NewsMapperFactory {
    createMapper<T, U>(newsSource: string): NewsMapper<T, U> {
      const config: MapperConfig<T, U> = { fieldMapping: {} };
  
      switch (newsSource) {
        case "category":
          config.fieldMapping = {  category: "name" };
          break;
        case "author":
          config.fieldMapping = {name: "name" };
          break;
        case "source":
          config.fieldMapping = {author: "name" };
          break;
        case "news":
          config.fieldMapping = {
            id: "id",
            title: "name",
            author: "author",
            publishedAt: "publishedAt",
            url: "url",
          };
          break;
  
        default:
          throw new Error("Unsupported news source");
      }
  
      return new GenericeNewsMapper<T, U>(config);
    }
  }
  