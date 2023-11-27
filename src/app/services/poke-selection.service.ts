import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeSelectionService {

  private _id = new BehaviorSubject<number>(-1);
  readonly id = this._id.asObservable();

  /**
   * @returns an observable on the id
   */
  getId(): Observable<number> {
    return this._id.asObservable();
  }

  /**
   * changes the id of the current pokemon
   * @param id the value of the new id
   */
  setId(id: number) {
    this._id.next(id);
  }
}
