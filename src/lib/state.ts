import { isValidElement, useSyncExternalStore } from "react";

const isObject = (item: any) =>
  typeof item === "object" && !Array.isArray(item);

const merge = (target: any, source: any) => {
  const isDeep = (prop: any) =>
    isObject(source[prop]) &&
    target.hasOwnProperty(prop) &&
    isObject(target[prop]) &&
    !isValidElement(source[prop]) &&
    !isValidElement(target[prop]);

  const replaced: any =
    !!source &&
    Object.getOwnPropertyNames(source || "")
      .map((prop) => ({
        [prop]: isDeep(prop) ? merge(target[prop], source[prop]) : source[prop],
      }))
      .reduce((a, b) => ({ ...a, ...b }), {});

  return {
    ...target,
    ...replaced,
  };
};

export const createState = <T>(state: T) => {
  const listeners = new Set<() => void>();

  const subscribe = (clbk: () => void) => {
    listeners.add(clbk);
    return () => listeners.delete(clbk);
  };

  let newState = state;

  const update = (args: (state: T) => Partial<T>) => {
    newState = merge(newState, args(newState));
    listeners.forEach((l) => l());
    return newState;
  };

  const useListen = <S>(field: (s: T) => S) =>
    useSyncExternalStore(subscribe, () => field(newState));

  return { state: newState, useListen, update };
};

export type StateType = typeof state;

export type ProductsResBody = {
  name: string;
  cover: string;
  bio: string;
  link: string;
  price: number;
};

const state = {
  products: [] as ProductsResBody[],
  productsEnd: false,
  selectedProduct: undefined as ProductsResBody | undefined,
};

export const store = createState(state);

export const storeFunctions = {
  core: (args: Partial<StateType>) => store.update(() => args),
};
