import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import NewsList from "../components/common/NewsList";
import FilterModal from "../components/pages/search/FilterModal";
import SearchField from "../components/pages/search/SearchField";
import { Category, Source } from "../core/interfaces/NewsInterface";
import { useNewsService } from "../hooks/search/useNewsService";
import { debounce } from "../utils/debounce";

interface FilterOption {
  categories: Category[];
  sources: Source[];
  startDate: string;
  endDate: string;
}

const Search = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filterOptions, setFilterOptions] = useState<FilterOption>({
    categories: [],
    endDate: "",
    sources: [],
    startDate: "",
  });
  const { newsList, submit } = useNewsService(filterOptions, searchTerm);

  const debouncedSearch = debounce(() => {
    setTimeout(() => {
      debugger;
      submit();
    }, 1000);
  }, 500);

  useEffect(() => {
    if (searchTerm !== "") {
      debouncedSearch();
    }
  }, [searchTerm]);

  const handleSearch = (text) => {
    setSearchTerm(text);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
        <div style={{ marginTop: "10px" }}>
          <SearchField onSearchChange={handleSearch} searchTerm={searchTerm} />
        </div>
        <FilterModal
          onFilterChange={setFilterOptions}
          filterOptions={filterOptions}
          onApply={submit}
        />
      </Box>
      <NewsList articles={newsList} />
    </>
  );
};
export default Search;
