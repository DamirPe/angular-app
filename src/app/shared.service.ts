import { Subject, Observable, BehaviorSubject } from 'rxjs';


export class SharedService {
  private menzOpen = false;
  private menuVisibilitySubject = new Subject<boolean>();
  private mainAppThemeObs = new BehaviorSubject<string>(null);
  private mainAppColor = '#ffffff';

  toggleMenu() {
    this.menzOpen = !this.menzOpen;
    this.menuVisibilitySubject.next(this.menzOpen);
  }

  getMenuVisibility(): Observable<boolean> {
    return this.menuVisibilitySubject.asObservable();
  }

  pickMainAppColor(color: string){
    this.mainAppColor = color;
    this.mainAppThemeObs.next(this.mainAppColor);
  }

  getMainAppTheme(): Observable<string>{
    return this.mainAppThemeObs.asObservable();
  }
}