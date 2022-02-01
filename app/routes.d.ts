declare module "routes-gen" {
  export type RouteParams = {
    "/character": {};
    "/character/:characterName": { characterName: string };
    "/character/:characterName/edit-with-inventory": { characterName: string };
    "/character/:characterName/edit-with-inventory/items": { characterName: string };
    "/character/:characterName/edit-manual": { characterName: string };
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
      | ["/character/:characterName", RouteParams["/character/:characterName"]]
      | ["/character/:characterName/edit-with-inventory", RouteParams["/character/:characterName/edit-with-inventory"]]
      | ["/character/:characterName/edit-with-inventory/items", RouteParams["/character/:characterName/edit-with-inventory/items"]]
      | ["/character/:characterName/edit-manual", RouteParams["/character/:characterName/edit-manual"]]
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
