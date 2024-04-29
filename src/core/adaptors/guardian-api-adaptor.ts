import { NewsFilter } from "../interfaces/NewsInterface";
import { Adaptor, RequestParams } from "./interfaces/adaptor";

enum FilterKey {
  CATEGORIES = "section",
  AUTHORS = "contributor",
  SOURCES = "source",
}

export function formatFilters(filter: NewsFilter): RequestParams {
  const requestParams: RequestParams = {};

  const addTags = (key: FilterKey, values: string[]): void => {
    if (values.length > 0) {
      requestParams[key] = `${encodeURIComponent(values.join(","))}`;
    }
  };

  if (filter.categories) {
    addTags(FilterKey.CATEGORIES, filter.categories.map((category) => category.name));
  }

  if (filter.authors) {
    addTags(FilterKey.AUTHORS, filter.authors.map((author) => author.name));
  }

  if (filter.sources) {
    addTags(FilterKey.SOURCES, filter.sources.map((source) => source.name));
  }

  if (filter.searchTerm) {
    requestParams.q = encodeURIComponent(filter.searchTerm);
  }

  if (filter.startDate && filter.endDate) {
    requestParams.fromDate = filter.startDate;
    requestParams.toDate = filter.endDate;
  }

  return requestParams;
}

export class GuardianAPIAdaptor implements Adaptor {
  adaptNews<T>(params: T): RequestParams {
    return formatFilters(params);
  }
}

