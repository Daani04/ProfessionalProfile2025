import { Component } from '@angular/core';
import { HeaderComponent } from "../../component/header/header.component";
import { Router } from '@angular/router';
import { LenguajeServiceService } from '../../services/translate.service';

@Component({
  selector: 'app-contact',
  imports: [HeaderComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  constructor(
    private router: Router,
    public languageService: LenguajeServiceService,

  ) {
    this.languageService.isSpanish$.subscribe(
      (isSpanish: boolean) => this.isSpanish = isSpanish
    );
  }

  public isSpanish: boolean = false;

  public githubAnimated: boolean = false;
  public linkedinAnimated: boolean = false;

  public changueToGithubAnimated(): void {
    this.githubAnimated = true;
  }

  public changueToLinkedinAnimated(): void {
    this.linkedinAnimated = true;
  }

  public confirmationMailPage(): void {
    this.router.navigate(['/confirm-page']);
  }

  toggleLanguage(language: 'es' | 'en') {
    this.languageService.setLanguage(language);
    localStorage.setItem('language', language);

  }
  getText(es: string, en: string): string {
    return this.isSpanish ? es : en;
  }
}
