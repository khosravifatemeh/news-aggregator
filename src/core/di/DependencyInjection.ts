export class DependencyInjector {
    private container: { [key: string]: any } = {};
  
    registerSingleton<T>(key: string, value: T | T[]): void {
      this.container[key] = {
        getInstance: () => {
          return value;
        },
      };
    }

    get<T>(key: string): T {
      debugger
      const instance = this.container[key];
      if (!instance) {
        throw new Error(`No instance found for key ${key} in the DependencyInjector container`);
      }
      return instance.getInstance();
    }
  
  }