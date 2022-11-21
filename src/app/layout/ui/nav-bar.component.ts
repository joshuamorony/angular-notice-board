import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  standalone: true,
  selector: "app-navbar",
  template: `
    <nav>
      <div class="container">
        <div class="items">
          <div class="logo">
            <img
              class="block h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />
          </div>
          <div class="links">
            <div class="flex space-x-4">
              <a routerLink="/" class="active">Dashboard</a>

              <a routerLink="/create" class="">Create</a>
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

      .logo {
        @apply flex flex-shrink-0 items-center;
      }

      .links {
        @apply hidden sm:ml-6 sm:block;

        a {
          @apply text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium;
        }

        .active {
          @apply bg-gray-900 hover:bg-gray-900 text-white;
        }
      }
    `,
  ],
  imports: [RouterLink],
})
export class NavBarComponent {}
