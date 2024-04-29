import { v4 as uuidv4 } from "uuid";
import { ALL_DATA_SOURCES, Inject } from "../di";
import { AbstractNewsDataSource } from "../data-sources/common/AbstractNewsDataSource";
import { Source } from "../interfaces/NewsInterface";
export class SourceService {
  private dataSources: AbstractNewsDataSource[];
  constructor(@Inject(ALL_DATA_SOURCES) dataSources: AbstractNewsDataSource[]) {
    this.dataSources = dataSources;
  }

  async getAll(): Promise<Source[]> {
    try {
      const promises = this.dataSources.map((ds) => ds.getSources());

      const results = await Promise.allSettled(promises);
      const successfulResults = results.filter(
        (result) => result.status === "fulfilled"
      );

      const combinedSources = successfulResults
        .map((result) => {
          if (result.status === "fulfilled") {
            return result.value;
          }
        })
        .flat();

      const uniqueSources = combinedSources
        .filter(
          (item, index, self) =>
            index === self.findIndex((t) => t["name"] === item["name"])
        )
        .map((s) => ({ id: uuidv4(), name: s.name }));

      return uniqueSources;
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
}
