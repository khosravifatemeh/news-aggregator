import { Chip, ListItem, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { GuardianDataSource } from "../../core/data-sources/GuardianDataSource";
import { NewYorkTimesDataSource } from "../../core/data-sources/NewYorkTimesDataSource";
import { NewsAPIDataSource } from "../../core/data-sources/NewsAPIDataSource";
import { Author } from "../../core/interfaces/NewsInterface";
import { AuthorService } from "../../core/services/AuthorService";
import { GuardianAPIConfigService } from "../../core/services/GuardianAPIConfigService";
import { NewYorkTimesConfigService } from "../../core/services/NewYorkTimesConfigService";
import { NewsAPIConfigService } from "../../core/services/NewsAPIConfigService";
import HTTPHandler from "../../utils/httpHandler";
import { useAuthors } from "../../hooks/common/useAuthors";

interface AuthorProps {
  selectedAuthors: Author[];
  onAuthorSelect: (selectedCategory: Author) => void;
}
const Author1: React.FC<AuthorProps> = ({
  onAuthorSelect,
  selectedAuthors,
}) => {
  const authors = useAuthors();

  return (
    <>
      <ListItem>
        <Typography variant="h6" color="">
          Authors
        </Typography>
      </ListItem>
      <ListItem>
        <div>
          {authors.map((item) => (
            <Chip
              sx={{ margin: 0.5 }}
              label={item.name}
              variant="outlined"
              color={
                selectedAuthors.map((author) => author.name).includes(item.name)
                  ? "primary"
                  : "default"
              }
              onClick={() => onAuthorSelect(item)}
            />
          ))}
        </div>
      </ListItem>
    </>
  );
};
export default Author1;
