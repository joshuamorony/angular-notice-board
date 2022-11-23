import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { NoticeService } from "../shared/data-access/notice.service";
import { NoticeListComponent } from "./ui/notice-list.component";

@Component({
  standalone: true,
  selector: "app-dashboard",
  template: `
    <h2 class="mb-2 text-5xl font-bold tracking-tight text-gray-800 dark:text-white">Notices</h2>
    <app-notice-list
      *ngIf="noticeService.notices$ | async as notices"
      [notices]="notices"
    ></app-notice-list>
  `,
  imports: [NoticeListComponent, CommonModule],
})
export class DashboardComponent {
  constructor(public noticeService: NoticeService) {}
}
