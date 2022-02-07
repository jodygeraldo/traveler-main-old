declare module "routes-gen" {
  export type RouteParams = {
    "/logout": {};
    "/signup": {};
    "/login": {};
    "/": {};
    "/character": {};
    "/character/tracker": {};
    "/character/": {};
    "/character/:characterName": { characterName: string };
    "/character/:characterName/items": { characterName: string };
    "/inventory": {};
    "/handbook": {};
    "/handbook/others": {};
    "/handbook/weekly": {};
  };

  export function route<
    T extends
      | ["/logout"]
      | ["/signup"]
      | ["/login"]
      | ["/"]
      | ["/character"]
      | ["/character/tracker"]
      | ["/character/"]
      | ["/character/:characterName", RouteParams["/character/:characterName"]]
      | ["/character/:characterName/items", RouteParams["/character/:characterName/items"]]
      | ["/inventory"]
      | ["/handbook"]
      | ["/handbook/others"]
      | ["/handbook/weekly"]
  >(...args: T): typeof args[0];
}
