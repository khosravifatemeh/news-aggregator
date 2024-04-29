import { DependencyInjector } from "./DependencyInjection";

export function createInjectDecorator(injector: DependencyInjector): any {
  debugger
  return function Inject(key: string): any {
    return (target, propertyKey: string | symbol, parameterIndex: number) => {
      const instance = injector.get(key);
      Reflect.set(target, propertyKey, instance);
    };
  };
}
