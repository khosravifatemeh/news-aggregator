import { Chip, ListItem, Typography } from "@mui/material";
import { Source } from "../../core/interfaces/NewsInterface";
import { useSources } from "../../hooks/common/useSources";

interface SourceProps {
  selectedSources: Source[];
  onSourceSelect: (source: Source) => void;
}

const SourceList: React.FC<SourceProps> = ({
  selectedSources,
  onSourceSelect,
}) => {
  const sources = useSources();
  return (
    <>
      <ListItem>
        <Typography variant="h6" color="">
          Sources
        </Typography>
      </ListItem>
      <ListItem>
        <div>
          {sources.map((item) => (
            <Chip
              sx={{ margin: 0.5 }}
              label={item.name}
              variant="outlined"
              key={item.id}
              color={
                selectedSources.map((source) => source.name).includes(item.name)
                  ? "primary"
                  : "default"
              }
              onClick={() => onSourceSelect(item)}
            />
          ))}
        </div>
      </ListItem>
    </>
  );
};
export default SourceList;
