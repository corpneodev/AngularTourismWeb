import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  constructor() {}
  private searchTermSubject = new BehaviorSubject<string>('');
  searchTerm$ = this.searchTermSubject.asObservable();

  updateSearchTerm(term: string) {
    this.searchTermSubject.next(term);
  }
  getCurrentSearchTerm(): string {
    return this.searchTermSubject.value;
  }
}
