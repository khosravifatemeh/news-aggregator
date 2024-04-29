import { convertDateFormat } from "../../utils/date";
import { NewsFilter } from "../interfaces/NewsInterface";
import { Adaptor, RequestParams } from "./interfaces/adaptor";

function formatFilters(filter: NewsFilter): RequestParams {
  const requestParams: RequestParams = {};

  const buildQuery = (parts: string[]): string => {
    if (parts.length > 0) {
      return encodeURIComponent(parts.join(" "));
    }
    return "";
  };

  const queryParts: string[] = [];

  if (filter.searchTerm) {
    queryParts.push(filter.searchTerm);
  }

  if (filter.categories) {
    queryParts.push(...filter.categories.map((category) => category.name).join(" OR "));
  }

  if (queryParts.length > 0) {
    requestParams.q = buildQuery(queryParts);
  }

  if (filter.authors) {
    requestParams.authors = filter.authors.map((author) => author.name).join(",");
  }

  if (filter.sources) {
    requestParams.source = filter.sources.map((source) => source.name).join(",");
  }

  if (filter.startDate && filter.endDate) {
    requestParams.from = convertDateFormat(filter.startDate);
    requestParams.to = convertDateFormat(filter.endDate);
  }

  return requestParams;
}

export class NewsAPIAdaptor implements Adaptor {
  adaptNews<T>(params: T): RequestParams {
    return formatFilters(params);
  }
}

