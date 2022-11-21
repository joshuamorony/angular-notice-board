import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  standalone: true,
  selector: "app-navbar",
  template: `
    <nav>
      <div class="container">
        <div class="items">
          <div class="flex flex-shrink-0 items-center">
            <img
              class="block h-8 w-auto lg:hidden"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />
            <img
              class="hidden h-8 w-auto lg:block"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <a
                routerLink="/"
                class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Dashboard
              </a>

              <a
                routerLink="/create"
                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Create
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [
    `
      :host {
        @apply bg-gray-800 block;
      }

      nav {
        @apply mx-auto max-w-7xl px-2 sm:px-6 lg:px-8;
      }

      .container {
        @apply relative flex h-16 items-center justify-between;
      }

      .items {
        @apply flex flex-1 items-center justify-center sm:items-stretch sm:justify-start;
      }
    `,
  ],
  imports: [RouterLink],
})
export class NavBarComponent {}
