import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { Notice } from "src/app/shared/interfaces/notice";

@Component({
  standalone: true,
  selector: "app-notice-list",
  template: `
    <div
      *ngFor="let notice of notices"
      class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {{ notice.title }}
      </h5>
      <p class="font-normal text-gray-700 dark:text-gray-400">
        {{ notice.content }}
      </p>
    </div>
  `,
  imports: [CommonModule],
})
export class NoticeListComponent {
  @Input() notices!: Notice[];
}
