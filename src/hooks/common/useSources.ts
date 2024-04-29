import { useEffect, useState } from "react";
import { injector } from "../../core/di";
import { Source } from "../../core/interfaces/NewsInterface";
import { SourceService } from "../../core/services/SourceService";

export const useSources = (): Source[] => {
  const [sources, setSources] = useState<Source[]>([]);

  const fetch = async () => {
    const facade = injector.get(SourceService.name) as SourceService;
    const result = await facade.getAll();
    setSources(result);
  };

  useEffect(() => {
    fetch();
  }, []);

  return sources;
};
