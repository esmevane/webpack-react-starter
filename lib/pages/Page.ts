export interface ReactRouterAsyncFunction {
  (location: any, callback: Function): void;
}

export interface Routable {
  path: string;
  getChildRoutes?: ReactRouterAsyncFunction;
  getComponent?: ReactRouterAsyncFunction;
  getComponents?: ReactRouterAsyncFunction;
  getIndexRoute?: ReactRouterAsyncFunction;
}

export interface Page {
  path(): string;
  toRoute(): Routable;
}
