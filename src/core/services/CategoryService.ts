import { v4 as uuidv4 } from "uuid";
import { ALL_DATA_SOURCES, Inject } from "../di";
import { AbstractNewsDataSource } from "../data-sources/common/AbstractNewsDataSource";
import { Category } from "../interfaces/NewsInterface";

export class CategoryService {
  private dataSources: AbstractNewsDataSource[];
  constructor(@Inject(ALL_DATA_SOURCES) dataSources: AbstractNewsDataSource[]) {
    this.dataSources = dataSources;
  }

  async getAll(): Promise<Category[]> {
    try {
      const promises = this.dataSources.map((ds) => ds.getCategories());

      const results = await Promise.allSettled(promises);
      const successfulResults = results.filter(
        (result) => result.status === "fulfilled"
      );

      const combinedCategories = successfulResults
        .map((result) => {
          if (result.status === "fulfilled") {
            return result.value;
          }
        })
        .flat();

      const uniqueCategories = combinedCategories
        .filter(
          (item, index, self) =>
            index === self.findIndex((t) => t["name"] === item["name"])
        )
        .map((s) => ({ id: uuidv4(), name: s.name }));

      return uniqueCategories;
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
}
