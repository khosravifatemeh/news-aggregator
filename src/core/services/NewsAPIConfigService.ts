
import endpointAPI from "../api-configs/NewsConfigs"
export interface NewsAPIConfig {
    apiKey:string;
    baseURL:string;
    categoryUrl:string;
    newsUrl:string;
    sourceUrl:string;
    authorUrl:string
  }

export class NewsAPIConfigService {
  private config: NewsAPIConfig = {
    baseURL: endpointAPI.NewsAPI.baseUrl,
    apiKey: endpointAPI.NewsAPI.apiKey,
    authorUrl: endpointAPI.NewsAPI.authorUrl,
    categoryUrl:endpointAPI.NewsAPI.categoryUrl,
    newsUrl:endpointAPI.NewsAPI.newsUrl,
    sourceUrl:endpointAPI.NewsAPI.sourceUrl
  };

  getConfig(): NewsAPIConfig {
    return this.config;
  }
}
