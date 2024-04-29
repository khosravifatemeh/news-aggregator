import { FC, forwardRef, useRef } from "react";
import { FixedSizeList as List } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import NewsItem from "./NewsItem";

interface InfiniteScrollProps {
  items: any[];
  loadMore: () => void;
  loading?: boolean;
  hasNextPage: boolean;
}

const ItemLayout = forwardRef<any, any>((props, ref) => (
  <div ref={ref} style={{ gap: 10 }} />
));

const InfiniteScrollList: FC<InfiniteScrollProps> = ({ items, loadMore }) => {
  const heightRef = useRef(null);
  return (
    <div
      ref={heightRef}
      style={{ maxHeight: "calc(100vh - 100px)", overflow: "auto" }}
    >
      <InfiniteLoader
        isItemLoaded={(index) => index < items.length}
        itemCount={items.length}
        loadMoreItems={loadMore}
      >
        {({ onItemsRendered, ref }) => (
          <List
            style={{ overflow: "hidden" }}
            itemCount={items.length}
            height={items.length * 100}
            className="list-container"
            onItemsRendered={onItemsRendered}
            ref={ref}
            itemSize={100}
            itemLayout={ItemLayout}
          >
            {({ index, style }) => (
              <NewsItem article={items[index]} style={style} />
            )}
          </List>
        )}
      </InfiniteLoader>
    </div>
  );
};

export default InfiniteScrollList;
