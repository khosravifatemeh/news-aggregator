import useInfiniteScroll from "../../hooks/common/useInfiniteScroll";
import InfiniteScrollList from "./InfiniteScrollList";

const NewsList = ({ articles }) => {
  const { items, hasNextPage, loading, loadMore } = useInfiniteScroll(articles);

  return (
    <InfiniteScrollList
      items={items}
      loadMore={loadMore}
      loading={loading}
      hasNextPage={hasNextPage}
    />
  );
};
export default NewsList;
