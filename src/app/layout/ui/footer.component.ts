import { Component } from "@angular/core";

@Component({
  standalone: true,
  selector: "app-footer",
  template: `
    <footer
      class="mx-6 p-4 bg-gray-800 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6"
    >
      <span class="text-sm text-gray-300 sm:text-center dark:text-gray-400">
        © 2022
        <a class="hover:underline">AngularIsCool Pty Ltd</a>
      </span>
      <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-300 dark:text-gray-400 sm:mt-0">
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
          <a href="#" class="hover:underline">Contact</a>
        </li>
      </ul>
    </footer>
  `,
})
export class FooterComponent {}
