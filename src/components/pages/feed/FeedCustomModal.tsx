import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Author,
  Category,
  Source,
} from "../../../core/interfaces/NewsInterface";
import {
  setSelectedAuthors,
  setSelectedCategories,
  setSelectedSources,
} from "../../../store/reducers/feed";
import AuthorList from "../../common/AuthorList";
import CategoryList from "../../common/CategoryList";
import SourceList from "../../common/SourceList";

interface FilterOption {
  selectedCategories: Category[];
  selectedSources: Source[];
  selectedAuthors: Author[];
}
interface FilterOptionProps {
  filterOptions: FilterOption;
  onApply: () => void;
}

const FeedCustomModal: React.FC<FilterOptionProps> = ({
  filterOptions,
  onApply,
}) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleSourceSelect = (source: Source) =>
    dispatch(setSelectedSources(source));
  const handleCategoryChange = (category: Category) =>
    dispatch(setSelectedCategories(category));
  const handleAuthorSelect = (author: Author) =>
    dispatch(setSelectedAuthors(author));

  const handleDialogClose = () => setOpen(false);
  const handleApply = () => onApply();

  return (
    <>
      <Button
        variant="contained"
        onClick={() => setOpen(true)}
        style={{ marginTop: "10px", marginLeft: "10px" }}
      >
        Feed Settings
      </Button>
      <Dialog onClose={handleDialogClose} open={open}>
        <DialogTitle>Feed Settings</DialogTitle>
        <DialogContent>
          <List>
            <SourceList
              selectedSources={filterOptions.selectedSources}
              onSourceSelect={handleSourceSelect}
            />
            <CategoryList
              selectedCategories={filterOptions.selectedCategories}
              onCategoryChange={handleCategoryChange}
            />
            <AuthorList
              selectedAuthors={filterOptions.selectedAuthors}
              onAuthorSelect={handleAuthorSelect}
            />
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleApply}>Apply</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FeedCustomModal;
