import NewsList from "../components/common/NewsList";
import FeedCustomModal from "../components/pages/feed/FeedCustomModal";
import { useNewsData } from "../hooks/feed/useNewsData ";

const Feed = () => {
  const {
    articles,
    submit,
    selectedCategories,
    selectedAuthors,
    selectedSources,
  } = useNewsData();

  return (
    <>
      <FeedCustomModal
        filterOptions={{
          selectedAuthors: selectedAuthors,
          selectedCategories: selectedCategories,
          selectedSources: selectedSources,
        }}
        onApply={submit}
      />
      <NewsList articles={articles} />
    </>
  );
};
export default Feed;
