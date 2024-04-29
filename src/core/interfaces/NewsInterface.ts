export interface NewsFilter {
  categories?: Category[];
  authors?: Author[];
  sources?: Source[];
  searchTerm?: string;
  startDate?: string;
  endDate?: string;
}
export enum DateFilterOption {
  Anytime = "Anytime",
  PastHour = "Past hour",
  Past24Hours = "Past 24 hours",
  PastWeek = "Past week",
  PastYear = "Past year",
}
//////// newsapi
export interface NewsAPISource {
  id: number;
  name: string;
  category: string;
}
export interface NewsAPISourceResponse {
  sources: NewsAPISource[];
}
export interface NewsAPIAuthorResponse {
  articles: { author: string }[];
}

//// newYork
export interface NewYorkTimesAPISection {
  name: string;
}
export interface NewYorkTimesAPISectionResponse {
  results: NewYorkTimesAPISection[];
}
export interface NewYorkTimesAPIAuthorResponse {
  results: { lists: { books: { author: string }[] }[] }[];
}
//// guardian
export interface GuardianAPITag {
  id: number;
  webTitle: string;
}
export interface GuardianAPITagResponse {
  results: GuardianAPITag[];
}

export interface GuardianAPICategoryResponse {
  results: any[];
}
export interface GuardianAPISourceResponse {
  sources: Source[];
}
export interface GuardianAPIContributorResponse {
  results: GuardianAPITag[];
}

export interface NewsAPINewsResponse {
  articles: Article[];
}

export interface NewsAPICategoryResponse {
  sources: Source[];
}
export interface NewYorkTimesNewsResponse {
  docs: any[];
}

export interface NewYorkTimesNewsItem {
  id: string;
  title: string;
  author: string; 
  publishedAt: string; 
  url: string;

}
export interface NewYorkTimesCategoriesResponse {
  topics: Category[];
}
export interface NewYorkTimesAuthorsResponse {
  organizations: Author[];
}
export interface NewYorkTimesSourcesResponse {
  desks: Source[];
}
export interface NewsItem {
  id: string;
  name: string;
  url: string;
  publishedAt: string;
  author: string;
}
export interface Article {
  id: string;
  title: string;
  url: string;
  publishedAt: string;
  author: string;
}

export interface NewsList {
  totalCount: number;
  newsItems: NewsItem[];
}
export interface Category {
  id?: number;
  name: string;
}
export interface Author {
  id: number;
  name: string;
}
export interface Source {
  id: number;
  name: string;
}
