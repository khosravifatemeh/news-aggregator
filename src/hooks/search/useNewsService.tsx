import { useMemo, useState } from "react";
import { injector } from "../../core/di";
import { NewsFilter, NewsItem } from "../../core/interfaces/NewsInterface";
import { NewsService } from "../../core/services/NewsService";

export const useNewsService = (filterOptions, searchTerm) => {
  const [newsList, setNewsList] = useState<NewsItem[]>([]);

  const submit = useMemo(
    () => async () => {
      const newsFilter: NewsFilter = {
        endDate: filterOptions.endDate,
        startDate: filterOptions.startDate,
        searchTerm: searchTerm,
        sources: filterOptions.sources,
        categories: filterOptions.categories,
      };
      const facade = injector.get(NewsService.name) as NewsService;
      const result = await facade.getAll(newsFilter);
      setNewsList(result);
    },
    [filterOptions, searchTerm]
  );

  return {
    newsList,
    submit,
  };
};
