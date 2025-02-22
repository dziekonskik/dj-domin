import { ValueOf } from "@/types/valueOf";

export const ROUTES = {
  HOME: "/",
  "O MNIE": "/o-mnie",
} as const satisfies Record<Uppercase<string>, `/${string}`>;

export const routes = Object.entries(ROUTES).map(([name, href]) => ({
  href,
  name: name.toLowerCase(),
}));

export type Route = ValueOf<typeof ROUTES>;
