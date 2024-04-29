import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { injector } from "../../core/di";
import { NewsService } from "../../core/services/NewsService";
import { RootState } from "../../store/rootState";

export const useNewsData = () => {
  const [articles, setArticles] = useState([]);
  const { selectedCategories, selectedAuthors, selectedSources } = useSelector(
    (state: RootState) => ({
      selectedCategories: state.feed.selectedFilters.categories,
      selectedAuthors: state.feed.selectedFilters.authors,
      selectedSources: state.feed.selectedFilters.sources,
    })
  );

  const submit = useMemo(
    () => async () => {
      const facade = injector.get(NewsService.name) as NewsService;
      const result = await facade.getAll({
        categories: selectedCategories,
        authors: selectedAuthors,
        sources: selectedSources,
      });
      setArticles(result);
    },
    [selectedCategories, selectedAuthors, selectedSources]
  );

  useEffect(() => {
    submit();
  }, []);

  return {
    articles,
    selectedAuthors,
    selectedCategories,
    selectedSources,
    submit,
  };
};
