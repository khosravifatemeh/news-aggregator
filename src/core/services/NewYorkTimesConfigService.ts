
import endpointAPI from "../api-configs/NewsConfigs"
export interface NewYorkTimesAPIConfig {
    apiKey:string;
    baseURL:string;
    categoryUrl:string;
    newsUrl:string;
    sourceUrl:string;
    authorUrl:string
  }

export class NewYorkTimesConfigService {
  private config: NewYorkTimesAPIConfig = {
    baseURL: endpointAPI.GuardianAPI.baseUrl,
    apiKey: endpointAPI.GuardianAPI.apiKey,
    authorUrl: endpointAPI.GuardianAPI.authorUrl,
    categoryUrl:endpointAPI.GuardianAPI.categoryUrl,
    newsUrl:endpointAPI.GuardianAPI.newsUrl,
    sourceUrl:endpointAPI.GuardianAPI.sourceUrl
  };

  getConfig(): NewYorkTimesAPIConfig {
    return this.config;
  }
}
