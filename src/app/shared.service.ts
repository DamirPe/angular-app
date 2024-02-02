import { Subject, Observable } from 'rxjs';


export class SharedService {
  private isDivVisible = false;
  private visibilitySubject = new Subject<boolean>();

  toggleMenu() {
    this.isDivVisible = !this.isDivVisible;
    this.visibilitySubject.next(this.isDivVisible);
  }

  getMenuVisibility(): Observable<boolean> {
    return this.visibilitySubject.asObservable();
  }
}