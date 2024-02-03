import { Subject, Observable } from 'rxjs';


export class SharedService {
  private menzOpen = false;
  private menuVisibilitySubject = new Subject<boolean>();

  toggleMenu() {
    this.menzOpen = !this.menzOpen;
    this.menuVisibilitySubject.next(this.menzOpen);
  }

  getMenuVisibility(): Observable<boolean> {
    return this.menuVisibilitySubject.asObservable();
  }
}