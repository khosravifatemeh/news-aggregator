import { useEffect, useState } from "react";
import { Category } from "../../core/interfaces/NewsInterface";
import { CategoryService } from "../../core/services/CategoryService";
import { injector } from "../../core/di";

export const useCategories = (): Category[] => {
  const [categories, setCategories] = useState<Category[]>([]);
  const fetch = async () => {
    const facade = injector.get(CategoryService.name) as CategoryService;
    const result = await facade.getAll();
    setCategories(result);
  };
  useEffect(() => {
    fetch();
  }, []);

  return categories;
};
