import { v4 as uuidv4 } from "uuid";
import { convertDateFormat } from "../../utils/date";
import HTTPHandler from "../../utils/httpHandler";
import { HttpOptions } from "../../utils/httpInstance";
import { AbstractNewsDataSource } from "./common/AbstractNewsDataSource";
import {
  Author,
  Category,
  NewYorkTimesAPIAuthorResponse,
  NewYorkTimesAPISection,
  NewYorkTimesAPISectionResponse,
  NewYorkTimesAuthorsResponse,
  NewYorkTimesCategoriesResponse,
  NewYorkTimesNewsResponse,
  NewYorkTimesSourcesResponse,
  NewsFilter,
  NewsItem,
  Source,
} from "../interfaces/NewsInterface";
import { NewYorkTimesConfigService } from "../services/NewYorkTimesConfigService";
import { NewsMapperFactory } from "../mappers/common/Mapper";
import { Adaptor } from "../adaptors/interfaces/adaptor";


export class NewYorkTimesDataSource extends AbstractNewsDataSource {
  private httpHandler: HTTPHandler;
  private configService: NewYorkTimesConfigService;
  private mapperFactory: NewsMapperFactory;
  private adaptor: Adaptor;

  constructor(
    httpHandler: HTTPHandler,
    configService: NewYorkTimesConfigService,
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
        "api-key": this.configService.getConfig().apiKey,
      },
    };
  }

  async getCategories(): Promise<Category[]> {
    debugger;
    const response =
      await this.httpHandler.request<NewYorkTimesAPISectionResponse>({
        ...this.options,
        url: this.configService.getConfig().categoryUrl,
      });
    const categoryMapper = this.mapperFactory.createMapper<
      NewYorkTimesAPISection,
      Category
    >("category");
    return response.results.map(categoryMapper.map);
  }

  async getSources(): Promise<Source[]> {
    debugger;
    const response =
      await this.httpHandler.request<NewYorkTimesAPISectionResponse>({
        ...this.options,
        url: this.configService.getConfig().sourceUrl,
      });
    const sourceMapper = this.mapperFactory.createMapper<
      NewYorkTimesAPISection,
      Source
    >("source");
    return response.results.map(sourceMapper.map);
  }

  async getAuthors(): Promise<Author[]> {
    debugger;
    const response =
      await this.httpHandler.request<NewYorkTimesAPIAuthorResponse>({
        ...this.options,
        url: this.configService.getConfig().authorUrl,
        params: {
          ...this.options.params,
        },
      });
      
    const authorMapper = this.mapperFactory.createMapper<any, Author>("author");
    return response.results
      .map((result) => result.lists.flatMap((list) => list.books))
      .flatMap((books) => books.map(authorMapper.map));
  }

  async getNews(filter: NewsFilter): Promise<NewsItem[]> {
    debugger;
    const requestParams = this.adaptor.adaptNews(filter);

    const response = await this.httpHandler.request<NewYorkTimesNewsResponse>({
      ...this.options,
      url: this.configService.getConfig().newsUrl,
      params: { ...this.options.params, ...requestParams },
    });

    const newsMapper = this.mapperFactory.createMapper<any, NewsItem>("news");
    return response.docs.map(newsMapper.map);
  }
}
