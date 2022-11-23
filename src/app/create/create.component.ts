import { Component } from "@angular/core";
import { NoticeService } from "../shared/data-access/notice.service";
import { AddNoticeFormComponent } from "./ui/add-notice-form.component";

@Component({
  standalone: true,
  selector: "app-create",
  template: `
    <app-add-notice-form (save)="noticeService.addNotice($event)"></app-add-notice-form>
  `,
  imports: [AddNoticeFormComponent],
})
export class CreateComponent {
  constructor(public noticeService: NoticeService) {}
}
