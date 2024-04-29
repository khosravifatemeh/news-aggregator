import { convertDateFormat } from "../../utils/date";
import { NewsFilter } from "../interfaces/NewsInterface";
import { Adaptor, RequestParams } from "./interfaces/adaptor";

enum NYTNewsFilterKey {
  CATEGORIES = "section",
  AUTHORS = "authors",
  SOURCES = "source",
  SEARCH_TERM = "query",
  START_DATE = "begin_date",
  END_DATE = "end_date",
}

export function formatFilters(filter: NewsFilter): RequestParams {
  const requestParams: RequestParams = {};

  const addFilters = (key: NYTNewsFilterKey, values: string[] | string): void => {
    if (values) {
      requestParams[key] = `${encodeURIComponent(typeof values === "string" ? values : values.join(","))}`;
    }
  };

  if (filter.categories) {
    addFilters(NYTNewsFilterKey.CATEGORIES, filter.categories.map((category) => category.name));
  }

  if (filter.authors) {
    addFilters(NYTNewsFilterKey.AUTHORS, filter.authors.map((author) => author.name));
  }

  if (filter.sources) {
    addFilters(NYTNewsFilterKey.SOURCES, filter.sources.map((source) => source.name));
  }

  if (filter.searchTerm) {
    addFilters(NYTNewsFilterKey.SEARCH_TERM, filter.searchTerm);
  }

  if (filter.startDate && filter.endDate) {
    addFilters(NYTNewsFilterKey.START_DATE, convertDateFormat(filter.startDate));
    addFilters(NYTNewsFilterKey.END_DATE, convertDateFormat(filter.endDate));
  }

  return requestParams;
}

export class NewYorkTimesAPIAdaptor implements Adaptor {
  adaptNews<T>(params: T): RequestParams {
    return formatFilters(params);
  }
}
