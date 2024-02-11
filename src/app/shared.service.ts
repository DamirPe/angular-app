import { Subject, Observable, BehaviorSubject } from 'rxjs';


export class SharedService {
  private menzOpen = false;
  private menuVisibilitySubject = new Subject<boolean>();

  private dataSourceThemeColor = new BehaviorSubject<string>("#fff"); // #fff is the initial value that is emitted when a component subscribes to themeColor$
  themeColor$ = this.dataSourceThemeColor.asObservable(); // $ at the end is a convention to indicate that a variable is an observable

  toggleMenu() {
    this.menzOpen = !this.menzOpen;
    this.menuVisibilitySubject.next(this.menzOpen);
  }

  getMenuVisibility(): Observable<boolean> {
    return this.menuVisibilitySubject.asObservable();
  }

  setThemeColor(color: string) {
    this.dataSourceThemeColor.next(color); // every component that is subscribed to themeColor$ will receive the new color
  }
}