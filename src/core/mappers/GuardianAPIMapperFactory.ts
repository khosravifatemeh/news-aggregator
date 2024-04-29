import {
  NewsMapper,
  MapperConfig,
  NewsMapperFactory,
  GenericeNewsMapper,
} from "./common/Mapper";
export class GuardianAPIMapperFactoryImpl implements NewsMapperFactory {
  createMapper<T, U>(newsSource: string): NewsMapper<T, U> {
    const config: MapperConfig<T, U> = { fieldMapping: {} };

    switch (newsSource) {
      case "category":
        config.fieldMapping = { id: "id", webTitle: "name" };
        break;
      case "author":
        config.fieldMapping = { id: "id", webTitle: "name" };
        break;
      case "source":
        config.fieldMapping = { id: "id", webTitle: "name" };
        break;
      case "news":
        config.fieldMapping = {
          id: "id",
          webTitle: "name",
          webUrl: "url",
          pubDate: "publishedAt",
          contributor: "author",
        };
        break;

      default:
        throw new Error("Unsupported news source");
    }

    return new GenericeNewsMapper<T, U>(config);
  }
}
