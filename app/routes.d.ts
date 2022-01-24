declare module "routes-gen" {
  export type RouteParams = {
    "/character/:name": { name: string };
    "/character": {};
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
    "/clear": {};
    "/login": {};
    "/init": {};
  };

  export function route<
    T extends
      | ["/character/:name", RouteParams["/character/:name"]]
      | ["/character"]
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
      | ["/clear"]
      | ["/login"]
      | ["/init"]
  >(...args: T): typeof args[0];
}
