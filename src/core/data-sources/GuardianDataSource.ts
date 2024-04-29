import { Inject } from "../di";
import HTTPHandler from "../../utils/httpHandler";
import { HttpOptions } from "../../utils/httpInstance";
import { AbstractNewsDataSource } from "./common/AbstractNewsDataSource";
import { GuardianAPIAdaptor } from "../adaptors/guardian-api-adaptor";
import { Adaptor } from "../adaptors/interfaces/adaptor";
import {
  Author,
  Category,
  GuardianAPIContributorResponse,
  GuardianAPITag,
  GuardianAPITagResponse,
  NewsFilter,
  NewsItem,
  Source,
} from "../interfaces/NewsInterface";
import { GuardianAPIMapperFactoryImpl } from "../mappers/GuardianAPIMapperFactory";
import { NewsMapperFactory } from "../mappers/common/Mapper";
import { GuardianAPIConfigService } from "../services/GuardianAPIConfigService";

export class GuardianDataSource extends AbstractNewsDataSource {
  private httpHandler: HTTPHandler;
  private configService: GuardianAPIConfigService;
  private adaptor: Adaptor;
  private mapperFactory: NewsMapperFactory;

  constructor(
    @Inject(HTTPHandler.name) httpHandler: HTTPHandler,
    @Inject(GuardianAPIConfigService.name) configService: GuardianAPIConfigService,
    @Inject(GuardianAPIAdaptor.name) adaptor: Adaptor,
    @Inject(GuardianAPIMapperFactoryImpl.name) mapperFactory: NewsMapperFactory
  ) {
    super();
    this.httpHandler = httpHandler;
    this.configService = configService;
    this.adaptor = adaptor;
    this.mapperFactory = mapperFactory;
  }

  get options(): HttpOptions {
    return {
      baseURL: this.configService.getConfig().baseURL,
      params: {
        "api-key": this.configService.getConfig().apiKey,
      },
    };
  }

  async getCategories(): Promise<Category[]> {
    const response = await this.httpHandler.request<GuardianAPITagResponse>({
      ...this.options,
      url: this.configService.getConfig().categoryUrl,
    });
  
    const categoryMapper = this.mapperFactory.createMapper<GuardianAPITag, Category>("category");
  
    return response.results.map(categoryMapper.map);
  }

  async getSources(): Promise<Source[]> {
    debugger;
    const response = await this.httpHandler.request<GuardianAPITagResponse>({
      ...this.options,
      url: this.configService.getConfig().sourceUrl,
    });
    const sourceMapper = this.mapperFactory.createMapper<GuardianAPITag, Source>("source");
  
    return response.results.map(sourceMapper.map);
  }

  async getAuthors(): Promise<Author[]> {
    debugger;
    const response =
      await this.httpHandler.request<GuardianAPIContributorResponse>({
        ...this.options,
        url: this.configService.getConfig().authorUrl,
        params: {
          ...this.options.params,
        },
      });

      const authorMapper = this.mapperFactory.createMapper<GuardianAPITag, Source>("author");
      return response.results.map(authorMapper.map);
  }

  async getNews(filter: NewsFilter): Promise<NewsItem[]> {
    const requestParams = this.adaptor.adaptNews(filter);

    const response = await this.httpHandler.request<{ results: any }>({
      ...this.options,
      url: this.configService.getConfig().newsUrl,
      params: { ...this.options.params, ...requestParams },
    });
    
    const newsMapper = this.mapperFactory.createMapper<any, NewsItem>("news");
    return response.results.map(newsMapper.map);
  }
}
