import { Component } from "@angular/core";
import { AddNoticeFormComponent } from "./ui/add-notice-form.component";

@Component({
  standalone: true,
  selector: "app-create",
  template: `
    <app-add-notice-form></app-add-notice-form>
  `,
  imports: [AddNoticeFormComponent],
})
export class CreateComponent {}
