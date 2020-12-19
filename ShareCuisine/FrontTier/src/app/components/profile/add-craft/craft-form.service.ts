import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Craft } from 'src/app/models/craft';

@Injectable({
  providedIn: 'root'
})
export class CraftFormService {

  private subject: BehaviorSubject<Craft>;
  private craft: Observable<Craft>;

  constructor() {
    this.subject = new BehaviorSubject<Craft>(new Craft());
    this.craft = this.subject.asObservable();
  }

  // Get logged in user details
  public get currentCraftValue(): Craft {
    return this.subject.value;
  }

  // Get logged in user details
  public set currentCraftValue(craft: Craft) {
    this.subject.next(craft);
  }

}
