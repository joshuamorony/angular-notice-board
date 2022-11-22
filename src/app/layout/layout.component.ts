import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./ui/header.component";
import { FooterComponent } from "./ui/footer.component";

@Component({
  standalone: true,
  selector: "app-layout",
  template: `
    <app-header></app-header>
    <div class="mx-auto max-w-7xl px-2 py-8 sm:px-6 lg:px-8">
      <router-outlet></router-outlet>
    </div>
    <app-footer></app-footer>
  `,
  imports: [RouterModule, HeaderComponent, FooterComponent],
})
export class LayoutComponent {}
