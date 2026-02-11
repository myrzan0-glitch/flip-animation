declare module "react/jsx-runtime" {
  export namespace JSX {
    interface Element {}
    interface IntrinsicElements {
      [elemName: string]: any;
    }
    interface ElementChildrenAttribute {
      children: {};
    }
  }

  export const Fragment: any;
  export function jsx(type: any, props: any, key?: any): JSX.Element;
  export function jsxs(type: any, props: any, key?: any): JSX.Element;
}

declare module "react/jsx-dev-runtime" {
  export namespace JSX {
    interface Element {}
    interface IntrinsicElements {
      [elemName: string]: any;
    }
    interface ElementChildrenAttribute {
      children: {};
    }
  }

  export const Fragment: any;
  export function jsxDEV(
    type: any,
    props: any,
    key: any,
    isStaticChildren: boolean,
    source: any,
    self: any,
  ): JSX.Element;
}

declare global {
  namespace JSX {
    interface Element {}
    interface IntrinsicElements {
      [elemName: string]: any;
    }
    interface ElementChildrenAttribute {
      children: {};
    }
  }
}

export {};
