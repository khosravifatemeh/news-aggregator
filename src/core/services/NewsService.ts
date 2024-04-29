import { sortItemsByDate } from "../../utils/date";
import { ALL_DATA_SOURCES, Inject } from "../di";
import { AbstractNewsDataSource } from "../data-sources/common/AbstractNewsDataSource";
import { NewsFilter, NewsItem } from "../interfaces/NewsInterface";

export class NewsService {
  private dataSources: AbstractNewsDataSource[];
  constructor(@Inject(ALL_DATA_SOURCES) dataSources: AbstractNewsDataSource[]) {
    this.dataSources = dataSources;
  }

  async getAll(filter: NewsFilter): Promise<NewsItem[]> {
    try {
      const promises = this.dataSources.map((ds) => ds.getNews(filter));

      const results = await Promise.allSettled(promises);
      const successfulResults = results.filter(
        (result) => result.status === "fulfilled"
      );

      const combinedNews = successfulResults
        .map((result) => {
          if (result.status === "fulfilled") {
            return result.value;
          }
        })
        .flat();

      const sortedNews = sortItemsByDate(combinedNews);
      return sortedNews;
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
}
