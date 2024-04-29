import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Author, Category, Source } from "./core/interfaces/NewsInterface";
import router from "./router/router";
import {
  setAuthors,
  setBadge,
  setCategories,
  setSources,
} from "./store/reducers/feed";
import { RootState } from "./store/store";
import "./style.css";
import localStorageService from "./utils/localStorage";

interface FeedSetting {
  categories: string[];
  sources: string[];
  authors: string[];
}
interface FeedSettingModel {
  categories: Category[];
  sources: Source[];
  authors: Author[];
}

const mapAuthors = (authors: FeedSetting["authors"]): Author[] => {
  return authors.map((author) => ({ id: uuidv4(), name: author }));
};

const mapCategories = (categories: FeedSetting["categories"]): Category[] => {
  return categories.map((category) => ({ id: uuidv4(), name: category }));
};

const mapSources = (sources: FeedSetting["sources"]): Source[] => {
  return sources.map((source) => ({ id: uuidv4(), name: source }));
};

const App: React.FC = () => {
  const dispatch = useDispatch();
  const feedSetting: FeedSettingModel = useSelector((state: RootState) => ({
    categories: state.feed.selectedFilters.categories,
    authors: state.feed.selectedFilters.authors,
    sources: state.feed.selectedFilters.sources,
  }));

  useEffect(() => {
    const { categories, authors, sources } = localStorageService.get(
      "feedSetting"
    ) as FeedSetting;

    if (
      authors?.length === 0 &&
      categories?.length === 0 &&
      sources?.length === 0
    ) {
      dispatch(setBadge(true));
    } else {
      dispatch(setCategories(mapCategories(categories)));
      dispatch(setAuthors(mapAuthors(authors)));
      dispatch(setSources(mapSources(sources)));
    }
  }, []);

  const handleBeforeUnload = useCallback(() => {
    const feed: FeedSetting = {
      authors: feedSetting.authors.map((author) => author.name),
      categories: feedSetting.categories.map((category) => category.name),
      sources: feedSetting.sources.map((source) => source.name),
    };
    localStorageService.set("feedSetting", feed);
    return true;
  }, [feedSetting]);

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [handleBeforeUnload]);

  return <RouterProvider router={router} />;
};
export default App;
