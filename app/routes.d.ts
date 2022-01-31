declare module "routes-gen" {
  export type RouteParams = {
    "/character": {};
    "/character/:name": { name: string };
    "/character/:name/edit-with-inventory": { name: string };
    "/character/:name/edit-with-inventory/items": { name: string };
    "/character/:name/edit-manual": { name: string };
    "/inventory": {};
    "/inventory/ascension-boss-material": {};
    "/inventory/talent-boss-material": {};
    "/inventory/common-material": {};
    "/inventory/local-specialty": {};
    "/inventory/ascension-gem": {};
    "/inventory/talent-book": {};
    "/inventory/crown": {};
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
      | ["/character"]
      | ["/character/:name", RouteParams["/character/:name"]]
      | ["/character/:name/edit-with-inventory", RouteParams["/character/:name/edit-with-inventory"]]
      | ["/character/:name/edit-with-inventory/items", RouteParams["/character/:name/edit-with-inventory/items"]]
      | ["/character/:name/edit-manual", RouteParams["/character/:name/edit-manual"]]
      | ["/inventory"]
      | ["/inventory/ascension-boss-material"]
      | ["/inventory/talent-boss-material"]
      | ["/inventory/common-material"]
      | ["/inventory/local-specialty"]
      | ["/inventory/ascension-gem"]
      | ["/inventory/talent-book"]
      | ["/inventory/crown"]
      | ["/logout"]
      | ["/signup"]
      | ["/"]
      | ["/others"]
      | ["/toggle"]
      | ["/weekly"]
      | ["/login"]
  >(...args: T): typeof args[0];
}
