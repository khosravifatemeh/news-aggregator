import {
  FormControl,
  InputLabel,
  ListItem,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { DateFilterOption } from "../../core/interfaces/NewsInterface";

interface DateSelectProps {
  selectedDate: DateFilterOption;
  onDateChange: (filterName: DateFilterOption) => void;
}

const DateSelect: React.FC<DateSelectProps> = ({
  selectedDate,
  onDateChange,
}) => {
  const handleDateChange = (event: SelectChangeEvent<DateFilterOption>) => {
    onDateChange(event.target.value as DateFilterOption);
  };

  return (
    <ListItem>
      <FormControl fullWidth>
        <InputLabel id="date-select-label">Date</InputLabel>
        <Select
          labelId="date-select-label"
          id="date-select"
          value={selectedDate}
          label="Date"
          onChange={handleDateChange}
        >
          {Object.values(DateFilterOption).map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </ListItem>
  );
};

export default DateSelect;
