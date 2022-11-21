import { Route } from "@angular/router";

export const routes: Route[] = [
  {
    path: "",
    loadComponent: () =>
      import("../dashboard/dashboard.component").then((m) => m.DashboardComponent),
  },
  {
    path: "create",
    loadComponent: () => import("../create/create.component").then((m) => m.CreateComponent),
  },
];
