import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LenguajeServiceService {
  constructor() { }

  private isSpanishSubject = new BehaviorSubject<boolean>(true);
  isSpanish$ = this.isSpanishSubject.asObservable();

  setLanguage(language: 'es' | 'en') {
    this.isSpanishSubject.next(language === 'es');
  }
  }