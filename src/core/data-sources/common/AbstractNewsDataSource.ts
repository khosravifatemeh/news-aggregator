import { Author, Category, NewsFilter, NewsItem, Source } from "../../interfaces/NewsInterface";

export abstract class AbstractNewsDataSource {
    abstract getCategories(): Promise<Category[]>;
    abstract getSources(): Promise<Source[]>;
    abstract getAuthors(): Promise<Author[]>;
    abstract getNews(filters: NewsFilter): Promise<NewsItem[]>;
  }