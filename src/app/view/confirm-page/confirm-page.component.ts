import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LenguajeServiceService } from '../../services/translate.service';

@Component({
  selector: 'app-confirm-page',
  imports: [],
  templateUrl: './confirm-page.component.html',
  styleUrl: './confirm-page.component.css'
})
export class ConfirmPageComponent {

  constructor(
    private router: Router,
    public languageService: LenguajeServiceService,

  ) {
    this.languageService.isSpanish$.subscribe(
      (isSpanish: boolean) => this.isSpanish = isSpanish
    );
  }

  public isSpanish: boolean = false;

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 2500);
  }

  toggleLanguage(language: 'es' | 'en') {
    this.languageService.setLanguage(language);
    localStorage.setItem('language', language);

  }
  getText(es: string, en: string): string {
    return this.isSpanish ? es : en;
  }

}
