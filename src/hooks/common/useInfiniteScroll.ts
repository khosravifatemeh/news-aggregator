import { useEffect, useState } from "react";

interface InfiniteScrollState {
  items: any[];
  page: number;
  hasNextPage: boolean;
  loading: boolean;
  loadMore: () => void;
}

const useInfiniteScroll = (articles: any[]) => {
  const [items, setItems] = useState<any[]>([]);
  const [page, setPage] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(page * 10 < articles.length);
  const [loading, setLoading] = useState(false);

  const loadMore = (
) => {
    setLoading(true);

    const nextPage = page + 1;
    const newItems = articles.slice(nextPage * 10, (nextPage + 1) * 10);

    setItems((prevItems) => [...prevItems, ...newItems]);

    setPage(nextPage);
    setHasNextPage(page * 10 < articles.length);

    setLoading(false);
  };

  useEffect(() => {
    setItems(articles.slice(0, 10));
  }, [articles]);

  return { items, page, hasNextPage, loading, loadMore } as InfiniteScrollState;
};

export default useInfiniteScroll;
