declare module "routes-gen" {
  export type RouteParams = {
    "/characters": {};
    "/characters/:name": { name: string };
    "/characters/:name/edit-with-inventory": { name: string };
    "/characters/:name/edit-manual": { name: string };
    "/inventory": {};
    "/logout": {};
    "/signup": {};
    "/": {};
    "/others": {};
    "/toggle": {};
    "/weekly": {};
    "/login": {};
  };

  export function route<
    T extends
      | ["/characters"]
      | ["/characters/:name", RouteParams["/characters/:name"]]
      | ["/characters/:name/edit-with-inventory", RouteParams["/characters/:name/edit-with-inventory"]]
      | ["/characters/:name/edit-manual", RouteParams["/characters/:name/edit-manual"]]
      | ["/inventory"]
      | ["/logout"]
      | ["/signup"]
      | ["/"]
      | ["/others"]
      | ["/toggle"]
      | ["/weekly"]
      | ["/login"]
  >(...args: T): typeof args[0];
}
