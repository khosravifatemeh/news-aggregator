import { TextField } from "@mui/material";
import useSearch from "../../../hooks/search/useSearch";

interface SearchFieldProps {
  searchTerm?: string;
  onSearchChange: (searchTerm: string) => void;
}

const SearchField: React.FC<SearchFieldProps> = ({
  searchTerm,
  onSearchChange,
}) => {
  const { handleSearchChange } = useSearch({
    onSearchChange,
  });

  return (
    <TextField
      sx={{
        width: {
          md: "400px",
        },
      }}
      onChange={handleSearchChange}
      value={searchTerm}
      label="Outlined"
      variant="outlined"
    />
  );
};

export default SearchField;
