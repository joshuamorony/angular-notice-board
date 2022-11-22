import { Component } from "@angular/core";

@Component({
  standalone: true,
  selector: "app-footer",
  template: `
    <footer
      class="mx-6 p-4 bg-gray-800 rounded-lg shadow md:flex md:items-center md:justify-between"
    >
      <span class="text-sm text-gray-300 sm:text-center dark:text-gray-400">
        © 2022
        <a class="hover:underline">AngularIsCool Pty Ltd</a>
      </span>
    </footer>
  `,
})
export class FooterComponent {}
