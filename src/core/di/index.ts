import HTTPHandler from "../../utils/httpHandler";
import { GuardianAPIAdaptor } from "../adaptors/guardian-api-adaptor";
import { NewYorkTimesAPIAdaptor } from "../adaptors/new-york-times-api-adaptor";
import { NewsAPIAdaptor } from "../adaptors/news-api-adaptor";
import { GuardianDataSource } from "../data-sources/GuardianDataSource";
import { NewYorkTimesDataSource } from "../data-sources/NewYorkTimesDataSource";
import { NewsAPIDataSource } from "../data-sources/NewsAPIDataSource";
import { GuardianAPIMapperFactoryImpl } from "../mappers/GuardianAPIMapperFactory";
import { NewYorkTimesAPIMapperFactoryImpl } from "../mappers/NewYorkTimesAPIMapperFactory";
import { NewsAPIMapperFactoryImpl } from "../mappers/NewsAPIMapperFactory";
import { AuthorService } from "../services/AuthorService";
import { CategoryService } from "../services/CategoryService";
import { GuardianAPIConfigService } from "../services/GuardianAPIConfigService";
import { NewYorkTimesConfigService } from "../services/NewYorkTimesConfigService";
import { NewsAPIConfigService } from "../services/NewsAPIConfigService";
import { SourceService } from "../services/SourceService";
import { DependencyInjector } from "./DependencyInjection";
import { createInjectDecorator } from "./Inject";
export const ALL_DATA_SOURCES = "ALL_DATA_SOURCES";


const injector = new DependencyInjector();
    injector.registerSingleton(HTTPHandler.name, HTTPHandler);

// common
injector.registerSingleton(HTTPHandler.name, HTTPHandler);
// guardian
injector.registerSingleton(GuardianAPIConfigService.name, GuardianAPIConfigService);
injector.registerSingleton(GuardianAPIAdaptor.name, GuardianAPIAdaptor);
injector.registerSingleton(GuardianAPIMapperFactoryImpl.name, GuardianAPIMapperFactoryImpl);
injector.registerSingleton(GuardianDataSource.name, GuardianDataSource);

// newsapi
injector.registerSingleton(NewsAPIConfigService.name, NewsAPIConfigService);
injector.registerSingleton(NewsAPIAdaptor.name, NewsAPIAdaptor);
injector.registerSingleton(NewsAPIMapperFactoryImpl.name, NewsAPIMapperFactoryImpl);
injector.registerSingleton(NewsAPIDataSource.name, NewsAPIDataSource);

// newyorktimes
injector.registerSingleton(NewYorkTimesConfigService.name, NewYorkTimesConfigService);
injector.registerSingleton(NewYorkTimesAPIAdaptor.name, NewYorkTimesAPIAdaptor);
injector.registerSingleton(NewYorkTimesAPIMapperFactoryImpl.name, NewYorkTimesAPIMapperFactoryImpl);
injector.registerSingleton(NewYorkTimesDataSource.name, NewYorkTimesDataSource);

// services
injector.registerSingleton(CategoryService.name, CategoryService);
injector.registerSingleton(AuthorService.name, AuthorService);
injector.registerSingleton(SourceService.name, SourceService);

injector.registerSingleton(ALL_DATA_SOURCES, [
    injector.get(GuardianDataSource.name),
    injector.get(NewsAPIDataSource.name),
    injector.get(NewYorkTimesDataSource.name),
  ]);
  const Inject=createInjectDecorator(injector)
  export { Inject, injector };

