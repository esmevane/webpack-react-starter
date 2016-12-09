interface AppContainerProps {
  header: Component<{}, {}>;
  sidebar: Component<{}, {}>;
  content: Component<{}, {}>;
}

interface Component<Props, State> {}

interface Page {
  path(): string;
  toRoute(): Routable;
}

interface ReactRouterAsyncFunction {
  (location: any, callback: Function): void;
}

interface Routable {
  path: string;
  getChildRoutes?: ReactRouterAsyncFunction;
  getComponent?: ReactRouterAsyncFunction;
  getComponents?: ReactRouterAsyncFunction;
  getIndexRoute?: ReactRouterAsyncFunction;
}
