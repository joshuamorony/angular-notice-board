import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Notice } from "../interfaces/notice";

@Injectable({
  providedIn: "root",
})
export class NoticeService {
  // Only this service has access to use the subject
  #notices$ = new BehaviorSubject<Notice[]>([]);

  // The rest of the application can just access the observable stream
  notices$ = this.#notices$.asObservable();

  addNotice(notice: Notice) {
    this.#notices$.next([...this.#notices$.value, notice]);
  }
}
