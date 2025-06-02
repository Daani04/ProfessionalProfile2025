import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';
import { LenguajeServiceService } from '../../services/translate.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  public isSpanish: boolean = false;

    constructor(
      private router: Router,
      private languageService:LenguajeServiceService ,
 
    )
      {
      this.languageService.isSpanish$.subscribe(
        (isSpanish: boolean) => this.isSpanish = isSpanish
      );
    }
 
 
    toggleLanguage(language: 'es' | 'en') {
      this.languageService.setLanguage(language);
      localStorage.setItem('language', language);
     
    }
     getText(es: string, en: string): string {
    return this.isSpanish ? es : en;
  }

  public goHomePage(): void {
     this.router.navigate(['/home']);
  }

  public changueLenguage(lenguege: string): void {
    if (lenguege === "es") {
      this.isSpanish = true;
    } else {
      this.isSpanish = false;
    }
  }
}
