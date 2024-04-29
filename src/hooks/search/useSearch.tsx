import { useCallback } from "react";

interface UseSearchParams {
  initialSearchTerm?: string;
  onSearchChange: (searchTerm: string) => void;
}

const useSearch = ({ onSearchChange }: UseSearchParams) => {
  const handleSearchChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      onSearchChange(value);
    },
    [onSearchChange]
  );

  return { handleSearchChange };
};

export default useSearch;
