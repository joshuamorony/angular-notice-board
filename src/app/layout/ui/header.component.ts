import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  standalone: true,
  selector: "app-header",
  template: `
    <nav class="bg-gray-800 block">
      <div class="mx-auto max-w-7xl px-8">
        <!-- Container -->
        <div class="relative flex h-16 items-center justify-between">
          <!-- Items -->
          <div class="flex flex-1 items-stretch justify-start">
            <!-- Logo -->
            <div class="flex flex-shrink-0 items-center">
              <img
                class="block h-8 w-auto"
                src="https://angular.io/assets/images/logos/angular/angular.svg"
              />
            </div>
            <!-- Links -->
            <div class="ml-auto">
              <div class="flex space-x-4">
                <a
                  class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  *ngFor="let link of links"
                  [routerLink]="link.route"
                  routerLinkActive="active"
                >
                  {{ link.text }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [
    `
      .active {
        @apply bg-gray-900 hover:bg-gray-900 text-white;
      }
    `,
  ],
  imports: [RouterModule, CommonModule],
})
export class HeaderComponent {
  links = [
    { route: "/dashboard", text: "Dashboard" },
    { route: "/create", text: "Create" },
  ];
}
