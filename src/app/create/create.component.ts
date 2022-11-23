import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { NoticeService } from "../shared/data-access/notice.service";
import { Notice } from "../shared/interfaces/notice";
import { AddNoticeFormComponent } from "./ui/add-notice-form.component";

@Component({
  standalone: true,
  selector: "app-create",
  template: `
    <app-add-notice-form (save)="handleSave($event)"></app-add-notice-form>
  `,
  imports: [AddNoticeFormComponent],
})
export class CreateComponent {
  constructor(private noticeService: NoticeService, private router: Router) {}

  handleSave(notice: Notice) {
    this.noticeService.addNotice(notice);
    this.router.navigate(["dashboard"]);
  }
}
