import { Component, EventEmitter, Output } from "@angular/core";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { Notice } from "src/app/shared/interfaces/notice";

@Component({
  standalone: true,
  selector: "app-add-notice-form",
  template: `
    <form [formGroup]="noticeForm" (ngSubmit)="handleSubmit()">
      <div class="mb-6">
        <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Title
        </label>
        <input
          formControlName="title"
          type="text"
          id="title"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div class="mb-6">
        <label for="content" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Message
        </label>
        <textarea
          formControlName="content"
          id="content"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        ></textarea>
      </div>
      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  `,
  imports: [ReactiveFormsModule],
})
export class AddNoticeFormComponent {
  @Output() save = new EventEmitter<Notice>();

  noticeForm = this.fb.nonNullable.group({
    title: "",
    content: "",
  });

  constructor(private fb: FormBuilder) {}

  handleSubmit() {
    this.save.emit(this.noticeForm.getRawValue());
  }
}
