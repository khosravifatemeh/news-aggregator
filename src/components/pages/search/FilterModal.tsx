import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
} from "@mui/material";
import { useState } from "react";
import {
  Category,
  DateFilterOption,
  Source,
} from "../../../core/interfaces/NewsInterface";
import CategoryList from "../../common/CategoryList";
import DateSelect from "../../common/DateSelect";
import SourceList from "../../common/SourceList";
import { toggleObjectByAttribute } from "../../../utils/array";
import {
  getPast24HoursDates,
  getPastHourDates,
  getPastWeekDates,
  getPastYearDates,
} from "../../../utils/date";
interface FilterOption {
  categories: Category[];
  sources: Source[];
  startDate: string;
  endDate: string;
}
interface FilterOptionProps {
  filterOptions: FilterOption;
  onFilterChange: (selectedFilters: FilterOption) => void;
  onApply: () => void;
}

const FilterModal: React.FC<FilterOptionProps> = ({
  onFilterChange,
  filterOptions,
  onApply,
}) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<DateFilterOption>(DateFilterOption.Anytime);

  const handleCategoryChange = (category: Category) => {
    onFilterChange({
      ...filterOptions,
      categories: toggleObjectByAttribute(
        filterOptions.categories,
        "id",
        category
      ),
    });
  };

  const handleSourceChange = (source: Source) => {
    onFilterChange({
      ...filterOptions,
      sources: toggleObjectByAttribute(filterOptions.sources, "id", source),
    });
  };

  const handleApply = () => {
    onApply();
  };

  const handleDateChange = (date: DateFilterOption) => {
    let { startDate, endDate }: { startDate: string; endDate: string } = {
      startDate: "",
      endDate: "",
    };

    switch (date) {
      case DateFilterOption.PastHour:
        ({ startDate, endDate } = getPastHourDates());
        break;
      case DateFilterOption.Past24Hours:
        ({ startDate, endDate } = getPast24HoursDates());
        break;
      case DateFilterOption.PastWeek:
        ({ startDate, endDate } = getPastWeekDates());
        break;
      case DateFilterOption.PastYear:
        ({ startDate, endDate } = getPastYearDates());
        break;
    }

    onFilterChange({ ...filterOptions, startDate, endDate });
    setDate(date);
  };

  return (
    <>
      <Button onClick={() => setOpen(true)} color="secondary">
        Filter
      </Button>
      <Dialog onClose={() => setOpen(false)} open={open}>
        <DialogTitle>Filter</DialogTitle>
        <DialogContent>
          <List>
            <SourceList
              selectedSources={filterOptions.sources}
              onSourceSelect={handleSourceChange}
            />

            <CategoryList
              selectedCategories={filterOptions.categories}
              onCategoryChange={handleCategoryChange}
            />
            <DateSelect selectedDate={date} onDateChange={handleDateChange} />
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancle</Button>
          <Button onClick={() => handleApply()}>Apply</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default FilterModal;
