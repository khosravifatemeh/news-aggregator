
import endpointAPI from "../api-configs/NewsConfigs"
export interface GuardianAPIConfig {
    apiKey:string;
    baseURL:string;
    categoryUrl:string;
    newsUrl:string;
    sourceUrl:string;
    authorUrl:string
  }

export class GuardianAPIConfigService {
  private config: GuardianAPIConfig = {
    baseURL: endpointAPI.GuardianAPI.baseUrl,
    apiKey: endpointAPI.GuardianAPI.apiKey,
    authorUrl: endpointAPI.GuardianAPI.authorUrl,
    categoryUrl:endpointAPI.GuardianAPI.categoryUrl,
    newsUrl:endpointAPI.GuardianAPI.newsUrl,
    sourceUrl:endpointAPI.GuardianAPI.sourceUrl
  };

  getConfig(): GuardianAPIConfig {
    return this.config;
  }
}
