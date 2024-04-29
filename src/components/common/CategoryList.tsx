import { Chip, ListItem, Typography } from "@mui/material";
import React from "react";
import { Category } from "../../core/interfaces/NewsInterface";
import { useCategories } from "../../hooks/common/useCategories";

interface CategoryListProps {
  selectedCategories: Category[];
  onCategoryChange: (selectedCategory: Category) => void;
}
const CategoryList: React.FC<CategoryListProps> = ({
  selectedCategories,
  onCategoryChange,
}) => {
  const categories = useCategories();

  return (
    <>
      <ListItem>
        <Typography variant="h6" color="">
          Categories
        </Typography>
      </ListItem>
      <ListItem>
        <div>
          {categories.map((item) => (
            <Chip
              sx={{ margin: 0.5 }}
              label={item.name}
              variant="outlined"
              color={
                selectedCategories.map((c) => c.name).includes(item.name)
                  ? "primary"
                  : "default"
              }
              onClick={() => onCategoryChange(item)}
            />
          ))}
        </div>
      </ListItem>
    </>
  );
};
export default CategoryList;
