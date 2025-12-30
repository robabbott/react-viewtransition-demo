import type * as React from "react";

declare module "react" {
  interface ViewTransitionProps {
    children?: React.ReactNode;
    name: string;
  }

  export const ViewTransition: React.ComponentType<ViewTransitionProps>;
}
