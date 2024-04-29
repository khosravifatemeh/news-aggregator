import { ALL_DATA_SOURCES, Inject } from "../di";
import { AbstractNewsDataSource } from "../data-sources/common/AbstractNewsDataSource";
import { Author } from "../interfaces/NewsInterface";
import { v4 as uuidv4 } from "uuid";

export class AuthorService {
  private dataSources: AbstractNewsDataSource[];
  constructor(@Inject(ALL_DATA_SOURCES) dataSources: AbstractNewsDataSource[]) {
    this.dataSources = dataSources;
  }

  async getAll(): Promise<Author[]> {
    try {
      const promises = this.dataSources.map((ds) => ds.getAuthors());

      const results = await Promise.allSettled(promises);
      const successfulResults = results.filter(
        (result) => result.status === "fulfilled"
      );

      const combinedAuthors = successfulResults
        .map((result) => {
          if (result.status === "fulfilled") {
            return result.value;
          }
        })
        .flat();

      const uniqueAuthors = combinedAuthors
      .filter(
        (item, index, self) =>
          index === self.findIndex((t) => t["name"] === item["name"])
      )
      .map((s) => ({ id: uuidv4(), name: s.name }));

      return uniqueAuthors;
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
}
