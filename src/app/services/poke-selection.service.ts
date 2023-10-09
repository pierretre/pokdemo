import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeSelectionService {

  subject: Subject<number> = new Subject();
  
  getObservable(): Observable<number> {
    return this.subject.asObservable();
  }

  setId(id: number){
    this.subject.next(id);
  }
}
