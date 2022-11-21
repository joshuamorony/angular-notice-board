import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavBarComponent } from "./ui/nav-bar.component";

@Component({
  standalone: true,
  selector: "app-layout",
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
  `,
  imports: [RouterModule, NavBarComponent],
})
export class LayoutComponent {}
