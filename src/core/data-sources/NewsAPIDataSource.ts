import { v4 as uuidv4 } from "uuid";
import { convertDateFormat } from "../../utils/date";
import HTTPHandler from "../../utils/httpHandler";
import { HttpOptions } from "../../utils/httpInstance";
import { AbstractNewsDataSource } from "./common/AbstractNewsDataSource";
import {
  Author,
  Category,
  NewsAPIAuthorResponse,
  NewsAPINewsResponse,
  NewsAPISource,
  NewsAPISourceResponse,
  NewsFilter,
  NewsItem,
  Source,
} from "../interfaces/NewsInterface";
import { NewsAPIConfigService } from "../services/NewsAPIConfigService";
import { NewsMapperFactory } from "../mappers/common/Mapper";
import { Adaptor } from "../adaptors/interfaces/adaptor";


export class NewsAPIDataSource extends AbstractNewsDataSource {
  private httpHandler: HTTPHandler;
  private configService: NewsAPIConfigService;
  private mapperFactory: NewsMapperFactory;
  private adaptor: Adaptor;

  constructor(
    httpHandler: HTTPHandler,
    configService: NewsAPIConfigService,
    mapperFactory: NewsMapperFactory,
    adaptor: Adaptor
  ) {
    super();
    this.httpHandler = httpHandler;
    this.configService = configService;
    this.mapperFactory = mapperFactory;
    this.adaptor = adaptor;
  }

  get options(): HttpOptions {
    return {
      baseURL: this.configService.getConfig().baseURL,
      params: {
        apiKey: this.configService.getConfig().apiKey,
      },
    };
  }

  async getCategories(): Promise<Category[]> {
    debugger;
    const response = await this.httpHandler.request<NewsAPISourceResponse>({
      ...this.options,
      url: this.configService.getConfig().categoryUrl,
    });
    const categoryMapper = this.mapperFactory.createMapper<
      NewsAPISource,
      Category
    >("category");
    return response.sources.map(categoryMapper.map);
  }

  async getSources(): Promise<Source[]> {
    debugger;
    const response = await this.httpHandler.request<NewsAPISourceResponse>({
      ...this.options,
      url: this.configService.getConfig().sourceUrl,
    });
    const sourceMapper = this.mapperFactory.createMapper<NewsAPISource, Source>(
      "source"
    );
    return response.sources.map(sourceMapper.map);
  }

  async getAuthors(): Promise<Author[]> {
    debugger;
    const response = await this.httpHandler.request<NewsAPIAuthorResponse>({
      ...this.options,
      url: this.configService.getConfig().authorUrl,
      params: {
        ...this.options.params,
      },
    });
    const authorMapper = this.mapperFactory.createMapper<any, Author>("author");
    return response.articles.map(authorMapper.map);
  }

  async getNews(filter: NewsFilter): Promise<NewsItem[]> {
    debugger;
    const requestParams = this.adaptor.adaptNews(filter);
    const response = await this.httpHandler.request<NewsAPINewsResponse>({
      ...this.options,
      url: this.configService.getConfig().newsUrl,
      params: { ...this.options.params, ...requestParams },
    });
    const newsMapper = this.mapperFactory.createMapper<any, NewsItem>("news");
    return response.articles.map(newsMapper.map);
  }
}
