import { useEffect, useState } from "react";
import { injector } from "../../core/di";
import { Author } from "../../core/interfaces/NewsInterface";
import { AuthorService } from "../../core/services/AuthorService";

export const useAuthors = (): Author[] => {
  const [authors, setAuthors] = useState<Author[]>([]);
  const fetch = async () => {
    const facade = injector.get(AuthorService.name) as AuthorService;
    const result = await facade.getAll();
    setAuthors(result);
  };
  useEffect(() => {
    fetch();
  }, []);

  return authors;
};
